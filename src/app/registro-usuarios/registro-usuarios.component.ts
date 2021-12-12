import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { RolService } from '../services/rol.service';
import { UsuarioService } from '../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

  visiblePaso1: boolean
  visiblePaso2: boolean
  usuario: Usuario = new Usuario();
  usuarioValido : boolean
  errorNombre : boolean
  errorPrimerApellido : boolean
  errorSegundoApellido : boolean
  errorCorreo : boolean
  errorNickname : boolean
  errorPassword : boolean
  password1 : string = ''
  password2 : string = ''

  constructor(private rolService : RolService, private userService: UsuarioService, private notificacionService : ToastrService, private validator : ValidatorService) {

    this.visiblePaso1 = true;
    this.visiblePaso2 = false;
    this.usuario = new Usuario();
    this.usuarioValido = true
    this.errorNombre = false
    this.errorPrimerApellido = false
    this.errorSegundoApellido = false
    this.errorCorreo = false
    this.errorNickname = false
    this.errorPassword = false

   }

  ngOnInit(): void {

  }

  siguientePaso() {
    this.errorNombre = false
    this.errorPrimerApellido = false
    this.errorSegundoApellido = false
    this.usuarioValido = true
    this.validarPaso1()
    //si pasa las validaciones siguiente pantalla
    if(this.usuarioValido) {
      this.visiblePaso1 = false;
      this.visiblePaso2 = true
    }
  }

  finalizarRegistro() {
     this.rolService.getRolById(40).subscribe(data => {
      this.usuario.rol = data;
    }, error => console.log(error));

    this.errorCorreo = false
    this.errorNickname = false
    this.errorPassword = false
    this.usuarioValido = true
    this.validarPaso2()
    if(this.usuarioValido) {
      this.registrar()
    }
  }

  registrar() {
    this.userService
    .createUsuario(this.usuario).subscribe(data => {
      if(data) {
        this.visiblePaso1 = true;
        this.visiblePaso2 = false;
        this.notificacionService.success("Usuario registrado con éxito")
        this.usuario = new Usuario();
        this.usuarioValido = true
      }
    },
    error => console.log(error));
  }

  validarPaso1() {
    // validaciones nombre
    if(!this.validator.validarTexto(this.usuario.nombre)) {
        this.errorNombre = true
    }
    if(!this.validator.validarTexto(this.usuario.primer_apellido)) {
        this.errorPrimerApellido = true
    }
    if(!this.validator.validarTexto(this.usuario.segundo_apellido)) {
        this.errorSegundoApellido = true
    }
    if(this.errorNombre || this.errorPrimerApellido || this.errorSegundoApellido) {
      this.notificacionService.error("Hay errores de validación en el formulario")
      this.usuarioValido = false
    }
  }

  validarPaso2() {

    if(!this.validator.esEmail(this.usuario.correoElectronico)) {
      this.errorCorreo = true
    }
    if(this.validator.esCampoVacio(this.usuario.nickname)) {
      this.errorNickname = true
    }
    if(!this.validator.validarPasswords(this.password1, this.password2)) {
      this.errorPassword = true
    }else {
      // si devuelvo true son igual y la meto para guardar
      this.usuario.password = this.password1
    }
    if(this.errorCorreo || this.errorNickname || this.errorPassword) {
      this.notificacionService.error("Hay errores de validación en el formulario")
      this.usuarioValido = false
    }


  }

}
