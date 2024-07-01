import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { CasassrvService } from 'src/app/casassrv.service';

interface Seguro {
  nombre: String,
  val: String
}


@Component({
  selector: 'app-buscar-filtros',
  templateUrl: './buscar-filtros.component.html',
  styleUrls: ['./buscar-filtros.component.css']
})
export class BuscarFiltrosComponent implements OnInit {

  listaSeguros: Seguro[];
  datosCasas: any[]=[];
  datosFracc: any[]=[];

  captura={
    seguros:'', 
    filtro: ''
}

constructor(private servCasas: CasassrvService, public router:Router) {

  this.listaSeguros = [
      {nombre:'Todas las casas', val: ''},
      {nombre:'Casas por precio (Mayor o igual que)', val: 'precio'},
      {nombre: 'Casas por estado', val:'estado'}
  ];

}

ngOnInit(): void {
  }

      getCasas(){
        this.servCasas.getTodosCasas().subscribe((resp:any)=>{
          this.datosCasas = resp;
        });
        }

      getCasasPrecio(){
        this.servCasas.getCasaPrecio(this.captura.filtro).subscribe((resp:any)=>{
          this.datosCasas = resp;
        })
      }

      getCasasEstados(){
        this.servCasas.getCasaEstado(this.captura.filtro).subscribe((resp:any)=>{
          this.datosFracc = resp;
        })
      }

borrarDatos():void{
  this.captura={
    seguros:'', 
    filtro: ''
  }

}

onSubmit(f: NgForm) {
  if(this.captura.seguros == 'Todas las casas'){
    this.getCasas();
    this.borrarDatos();
  }
  else if(this.captura.seguros == 'Casas por precio (Mayor o igual que)'){
    this.getCasasPrecio();
    alert('Se muestran: ' + this.captura.seguros + ' ' + this.captura.filtro);
  this.borrarDatos();
  }else if(this.captura.seguros == 'Casas por estado'){
    this.datosCasas=[];
    this.getCasasEstados();
    alert('Se muestran ' + this.captura.seguros + ' ' + this.captura.filtro);
    this.borrarDatos();
  }
  
}

}
