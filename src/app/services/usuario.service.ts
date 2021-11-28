import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoginForm } from '../model/login-form';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private restUrl = 'http://localhost:8080/oxygen-rest/rest/'

  private logger = new Subject<boolean>();

  private loggedIn !: boolean

  user !: Observable<any>

  private usuarioLogueado = new Subject<Usuario>();

  constructor(private http: HttpClient) { }

  createUsuario(usuario: Object): Observable<Object> {
    return this.http.post(this.restUrl+'crearUsuario', usuario);
  }

  login(email : string, password : string) : Observable<any> {
    this.user = this.http.post(this.restUrl+'login', new LoginForm(email,password))
    this.user.subscribe(user => {
      this.loggedIn = true
      this.logger.next(this.loggedIn)
      this.usuarioLogueado = user
      console.log(user)
    })
    return this.user
  }

  isLoggedUser() : Observable<any> {
    return this.logger.asObservable();
  }

  logOutUser() {
    localStorage.removeItem('user');
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
  }

  getUsuarioLogueado() : Observable<Usuario> {
    return this.user
  }
}
