import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private restUrl = 'http://localhost:8080/oxygen-rest/rest/'

  constructor(private http: HttpClient) { }

  getRoles() : Observable<any> {
    return this.http.get(this.restUrl+'roles');
  }

  getRolById(id: number) : Observable<any> {
    return this.http.get(this.restUrl+'roles/'+id);
  }
}
