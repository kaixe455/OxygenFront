import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private restUrl = 'http://localhost:8080/oxygen-rest/rest/'

  constructor(private http: HttpClient) { }

  createJuego(juego: Object): Observable<Object> {

    return this.http.post(this.restUrl+'crearJuego', juego);

  }

  getJuegosAll() : Observable<any> {
    return this.http.get(this.restUrl+'juegos');
  }
}
