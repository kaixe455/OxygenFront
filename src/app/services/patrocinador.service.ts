import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatrocinadorService {

  private restUrl = 'http://localhost:8080/oxygen-rest/rest/'

  constructor(private http: HttpClient) { }

  createPatrocinador(patrocinador: Object): Observable<Object> {

    return this.http.post(this.restUrl+'crearPatrocinador', patrocinador);

  }

  getPatrocinadoresAll() : Observable<any> {
    return this.http.get(this.restUrl+'patrocinadores');
  }

  deletePatrocinadorById(id : number) {
    return this.http.delete(this.restUrl+'borrarPatrocinador/'+id).subscribe(data => {
      console.log(data);})
  }

  getPatrocinadorById(id: number): Observable<any> {
    return this.http.get(this.restUrl+'/patrocinadores/'+id);
  }

  updatePatrocinador(id: number, body: any): Observable<Object> {
    return this.http.put(this.restUrl + '/updatePatrocinador/'+ id, body);
  }
}
