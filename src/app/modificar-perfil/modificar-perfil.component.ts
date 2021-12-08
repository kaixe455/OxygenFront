import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})
export class ModificarPerfilComponent implements OnInit {

  usuario : Usuario = new Usuario();
  usuario$ !: Observable<Usuario>

  constructor(private usuarioService : UsuarioService, private toastr: ToastrService) {
    this.usuario$ = this.usuarioService.getUsuarioLogueado()
    this.usuario$.subscribe(usuario => this.usuario = usuario)
   }

  ngOnInit(): void {
  }

  modificarPerfil(id : number) {
    this.usuarioService.updateUsuario(this.usuario, this.usuario.id).subscribe(usuario => {
      this.usuario = usuario
      this.toastr.success("Perfil actualizado con exito")
    })
  }

}
