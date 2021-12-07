import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  private restUrl = 'http://localhost:8080/oxygen-rest/rest/'

  constructor(private http: HttpClient) { }

  createPartido(partido: Object): Observable<Object> {

    return this.http.post(this.restUrl+'crearPartido', partido);

  }

  getPartidosAdmin() : Observable<any> {
    return this.http.get(this.restUrl+'partidosAdmin');
  }

  deletePartidoById(id : number) {
    return this.http.delete(this.restUrl+'borrarPartido/'+id).subscribe(data => {
      console.log(data);})
  }

  getPartidoById(id : number) : Observable<any> {
    return this.http.get(this.restUrl+'partidos/'+id);
  }

  updatePartido(partido : Object, id : number) {
    return this.http.put(this.restUrl+'updatePartido/'+id,partido);
  }

  eliminarResultado(id : number) : Observable<any> {
    console.log(this.restUrl + 'reiniciarPartido/'+ id)
    return this.http.get(this.restUrl+'reiniciarPartido/'+ id);
  }

  getProximoPartido() : Observable<any> {
    return this.http.get(this.restUrl+'proximoPartido');
  }

  getUltimosResultados() : Observable<any> {
    return this.http.get(this.restUrl+'ultimosResultados');
  }



}
