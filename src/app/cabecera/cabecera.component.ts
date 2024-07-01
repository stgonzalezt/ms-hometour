import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  items: MenuItem[];

  activeItem: MenuItem;

  constructor(){
    this.items = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home'},
      { label: 'Buscar por filtos', icon: 'pi pi-fw pi-search' },
    ];

    this.activeItem = this.items[0];

  }

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/inicio']},
      { label: 'Buscar por filtos', icon: 'pi pi-fw pi-search', routerLink: ['/buscarfiltros']},
    ];

    this.activeItem = this.items[0];
  }

}
