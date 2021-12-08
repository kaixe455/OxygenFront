import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private restUrl = 'http://localhost:8080/oxygen-rest/rest/'

  constructor(private http: HttpClient) { }

  createJugador(jugador: Object): Observable<Object> {

    return this.http.post(this.restUrl+'crearJugador', jugador);

  }

  getJugadoresAll() : Observable<any> {
    return this.http.get(this.restUrl+'jugadores');
  }

  deleteJugadorById(id : number) {
    return this.http.delete(this.restUrl+'borrarJugador/'+id).subscribe(data => {
      console.log(data);})
  }

  getJugadorById(id: number): Observable<any> {
    return this.http.get(this.restUrl+'/jugadores/'+id);
  }

  updateJugador(id: number, body: any): Observable<Object> {
    return this.http.put(this.restUrl + '/updateJugador/'+ id, body);
  }

  getJugadoresByJuego(idJuego : number) : Observable<any> {
    return this.http.get(this.restUrl+'/jugadoresbyjuego/' + idJuego);
  }
}
