import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private restUrl = 'http://localhost:8080/oxygen-rest/rest/'

  constructor(private http: HttpClient) { }

  getNoticiasHome() : Observable<any> {
    return this.http.get(this.restUrl+'noticiasHome');
  }

  getAllNoticias() : Observable<any> {
    return this.http.get(this.restUrl+'noticiasSeccion');
  }

  getNoticiasPorCategoria(id : number) : Observable<any> {
    return this.http.get(this.restUrl+'noticiasporcategoria/'+id)
  }

  deleteNoticiaById(id : number) {
    return this.http.delete(this.restUrl+'borrarNoticia/'+id).subscribe(data => {
      console.log(data)})
  }

  createNoticia(noticia: Object): Observable<Object> {
    return this.http.post(this.restUrl+'createNoticia', noticia);
  }

  getNoticiasAdmin() : Observable<any> {
    return this.http.get(this.restUrl+'noticiasAdmin');
  }

  getNoticiaById(id: number): Observable<any> {
    return this.http.get(this.restUrl+'/noticias/'+id);
  }

  updateNoticia(id: number, body: any): Observable<Object> {
    return this.http.put(this.restUrl + '/updateNoticia/'+ id, body);
  }


}
