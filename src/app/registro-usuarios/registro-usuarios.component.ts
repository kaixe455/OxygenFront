import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { RolService } from '../services/rol.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

  visiblePaso1: boolean
  visiblePaso2: boolean
  usuario: Usuario = new Usuario();

  constructor(private rolService : RolService, private userService: UsuarioService) {

    this.visiblePaso1 = true;
    this.visiblePaso2 = false;
    this.usuario = new Usuario();

   }

  ngOnInit(): void {

  }

  siguientePaso() {
    this.visiblePaso1 = false;
    this.visiblePaso2 = true
  }

  finalizarRegistro() {
     this.rolService.getRolById(1).subscribe(data => {
      this.usuario.rol = data;
    }, error => console.log(error));

    console.log(this.usuario);
    this.registrar();
  }

  registrar() {
    this.userService
    .createUsuario(this.usuario).subscribe(data => {
      console.log(data)
      this.visiblePaso1 = true;
      this.visiblePaso2 = false;
      this.usuario = new Usuario();
    },
    error => console.log(error));
  }

}
