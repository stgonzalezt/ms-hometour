import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CasassrvService {
  endpoint: string = 'http://localhost:8080/ProyectoU3/restInmobiliariaISO';
  endpoint1: string = 'http://localhost:8080/ProyectoU3/restInmobiliariaISO/casas/precio/';
  endpoint2: string = 'http://localhost:8080/ProyectoU3/restInmobiliariaISO/fraccionamientosXestado/';

  constructor(private http: HttpClient) { }
    
  getTodosCasas(): Observable<any> {
    let queryParams = new HttpParams();
    //Por omisión regresa el cuerpo del mensaje y lo considera JSON
      return this.http.get(this.endpoint+'/casas',{params: queryParams});
    }

  getCasaPrecio(precio:String): Observable<any> {
    //Por omisión regresa el cuerpo del mensaje y lo considera JSON
      return this.http.get(this.endpoint1+precio);
    }
  
    getCasaEstado(estado:String): Observable<any> {
      //Por omisión regresa el cuerpo del mensaje y lo considera JSON
        return this.http.get(this.endpoint2+estado);
      }

}
