import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.css']
})
export class LoginUsuariosComponent implements OnInit {

  usuario : Usuario = new Usuario

  constructor(private usuarioService : UsuarioService, private router: Router, private notificacionService : ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.usuarioService.login(this.usuario.correoElectronico,this.usuario.password).subscribe(logged => {
      localStorage.setItem('user', JSON.stringify(logged))
      this.notificacionService.success("Inicio de sesión correcto")
      this.router.navigate(['home'])
    })
  }

}
