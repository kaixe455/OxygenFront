import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  logged : boolean
  usuario$ !: Observable<Usuario>
  usuario !: Usuario

  constructor(private usuarioService : UsuarioService, private router : Router) {
    this.logged = false
    this.usuarioService.isLoggedUser().subscribe(foo => {
      this.logged = foo
      this.usuario$ = usuarioService.getUsuarioLogueado()
      this.usuario$.subscribe(usuario => {
        this.usuario = usuario
      })
    });
   }

  ngOnInit(): void {

  }

  logOut() {
    this.usuarioService.logOutUser()
  }

  irModificarPerfil() {
    this.router.navigate(['modificarPerfil'])
  }

}
