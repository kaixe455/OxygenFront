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
}
