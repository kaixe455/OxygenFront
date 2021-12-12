import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})
export class ModificarPerfilComponent implements OnInit {

  usuario : Usuario = new Usuario();
  usuario$ !: Observable<Usuario>
  usuarioValido : boolean = true
  errorNombre : boolean = false
  errorPrimerApellido : boolean = false
  errorSegundoApellido : boolean = false
  errorCorreo : boolean = false
  errorNickname : boolean = false
  errorTwitter : boolean = false
  errorTwitch : boolean = false


  constructor(private usuarioService : UsuarioService, private toastr: ToastrService, private validator : ValidatorService) {
    this.usuario$ = this.usuarioService.getUsuarioLogueado()
    if(this.usuario$) {
      this.usuario$.subscribe(usuario => this.usuario = usuario)
    } else {
      toastr.info("Se necesita iniciar sesión para acceder a esta funcionalidad")
    }
   }

  ngOnInit(): void {
  }

  modificarPerfil(id : number) {
    this.errorCorreo = false
    this.errorNickname = false
    this.errorNombre = false
    this.errorPrimerApellido = false
    this.errorSegundoApellido = false
    this.errorTwitch = false
    this.errorTwitter = false
    this.usuarioValido = true
    if(this.usuario$) {
      this.validarCampos()
      if(this.usuarioValido) {
        this.usuarioService.updateUsuario(this.usuario, this.usuario.id).subscribe(usuario => {
        this.usuario = usuario
        this.toastr.success("Perfil actualizado con exito")
        })
      }
    } else {
      if(this.usuario$) {
        this.toastr.error("Hay errores en el formulario.")
      }else {
        this.toastr.info("Se necesita iniciar sesión para acceder a esta funcionalidad")
      }
    }
  }

  validarCampos() {
    // validaciones nombre que sean letras
    if(!this.validator.validarTexto(this.usuario.nombre)) {
        this.errorNombre = true
    }
    // valido que el apellido sean letras
    if(!this.validator.validarTexto(this.usuario.primer_apellido)) {
        this.errorPrimerApellido = true
    }
    // valido que segundo apellido sean letras si no es vacio
    if(!this.validator.esCampoVacio(this.usuario.segundo_apellido) && !this.validator.validarTexto(this.usuario.segundo_apellido)) {
        this.errorSegundoApellido = true
    }
    // valido que tenga email formato correo
    if(!this.validator.esEmail(this.usuario.correoElectronico)) {
      this.errorCorreo = true
    }
    // valido que nickname no este vacio
    if(this.validator.esCampoVacio(this.usuario.nickname)) {
      this.errorNickname = true
    }
     // valido que el campo twitch sea una url cuando no esta vacio
     if(!this.validator.esCampoVacio(this.usuario.twitch) && !this.validator.esUrl(this.usuario.twitch)) {
      this.errorTwitch = true
    }
    // valido que el campo twitter sea una url cuando no esta vacio
    if(!this.validator.esCampoVacio(this.usuario.twitter) && !this.validator.esUrl(this.usuario.twitter)) {
      this.errorTwitter = true
    }
    // si hay algún error usuario no es valido
    if(this.errorNombre || this.errorPrimerApellido || this.errorSegundoApellido || this.errorTwitch || this.errorTwitter || this.errorCorreo || this.errorNickname) {
      this.usuarioValido = false
    }
  }

}
