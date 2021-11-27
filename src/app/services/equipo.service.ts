import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private restUrl = 'http://localhost:8080/oxygen-rest/rest/'

  constructor(private http: HttpClient) { }

  createEquipo(equipo: Object): Observable<Object> {
    return this.http.post(this.restUrl+'crearEquipo', equipo);
  }

  getEquiposAll() : Observable<any> {
    return this.http.get(this.restUrl+'equipos');
  }

  deleteEquipoById(id : number) {
    return this.http.delete(this.restUrl+'borrarEquipo/'+id).subscribe(data => {
      console.log(data);})
  }

  getEquipoById(id: number): Observable<any> {
    return this.http.get(this.restUrl+'/equipos/'+id);
  }

  updateEquipo(id: number, body: any): Observable<Object> {
    return this.http.put(this.restUrl + '/updateEquipo/'+ id, body);
  }




}
