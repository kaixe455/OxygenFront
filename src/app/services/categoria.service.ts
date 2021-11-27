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

  createCategoria(categoria: Object): Observable<Object> {
    return this.http.post(this.restUrl+'crearCategoria', categoria);
  }

  deleteCategoriaById(id : number) {
    return this.http.delete(this.restUrl+'borrarCategoria/'+id).subscribe(data => {
      console.log(data);})
  }

  getCategoriaById(id: number): Observable<any> {
    return this.http.get(this.restUrl+'/categorias/'+id);
  }

  updateCategoria(id: number, body: any): Observable<Object> {
    return this.http.put(this.restUrl + '/updateCategoria/'+ id, body);
  }
}
