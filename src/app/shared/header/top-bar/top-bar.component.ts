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
  puedeVerNoticias : boolean = false
  puedeVerCategorias : boolean = false
  puedeVerPatrocinadores : boolean = false
  puedeVerPartidos : boolean = false
  puedeVerJugadores : boolean = false
  puedeVerEquipos : boolean = false
  puedeVerSliders : boolean = false
  puedeVerJuegos : boolean = false
  puedeVerUsuarios : boolean = false

  constructor(private usuarioService : UsuarioService, private router : Router) {
    this.logged = false
    this.usuarioService.isLoggedUser().subscribe(foo => {
      this.logged = foo
      this.usuario$ = usuarioService.getUsuarioLogueado()
      this.usuario$.subscribe(usuario => {
        this.usuario = usuario;
        this.puedeVerNoticias = false
        this.puedeVerCategorias = false
        this.puedeVerPatrocinadores = false
        this.puedeVerPartidos = false
        this.puedeVerJugadores = false
        this.puedeVerEquipos = false
        this.puedeVerSliders = false
        this.puedeVerJuegos = false
        this.puedeVerUsuarios = false
        this.obtenerPermisos()
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

  obtenerPermisos()  {

     // Administrador -> todos
  //Manager -> juegos, partidos, jugadores, equipos
  //Redactor -> noticias, categorias

    if(this.usuario.rol.id == 1) {
      console.log("Admin");
      this.puedeVerNoticias = true
      this.puedeVerCategorias = true
      this.puedeVerPatrocinadores = true
      this.puedeVerPartidos = true
      this.puedeVerJugadores = true
      this.puedeVerEquipos = true
      this.puedeVerSliders = true
      this.puedeVerJuegos = true
      this.puedeVerUsuarios = true
    }else if(this.usuario.rol.id == 38) {
      console.log("Manager");
      this.puedeVerPartidos = true
      this.puedeVerJugadores = true
      this.puedeVerEquipos = true
      this.puedeVerJuegos = true

    }else if (this.usuario.rol.id == 39) {
      console.log("Redactor");
      this.puedeVerNoticias = true
      this.puedeVerCategorias = true
    }

  }

}
