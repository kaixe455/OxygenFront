import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private restUrl = 'http://localhost:8080/oxygen-rest/rest/'

  constructor(private http: HttpClient) { }

  getCategoriasConNoticia() : Observable<any> {
    return this.http.get(this.restUrl+'categoriasConNoticia');
  }

  getCategoriasAll() : Observable<any> {
    return this.http.get(this.restUrl+'categorias');
  }
}
