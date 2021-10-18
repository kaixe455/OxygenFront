import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private restUrl = 'http://localhost:8080/oxygen-rest/rest/'

  constructor(private http: HttpClient) { }

  getNoticiasAll() : Observable<any> {
    return this.http.get(this.restUrl+'noticiasHome');
  }

  getAllNoticiasSeccion() : Observable<any> {
    return this.http.get(this.restUrl+'noticiasSeccion');
  }

  getNoticiasPorCategoria(id : number) : Observable<any> {
    return this.http.get(this.restUrl+'noticiasporcategoria/'+id);
  }
}
