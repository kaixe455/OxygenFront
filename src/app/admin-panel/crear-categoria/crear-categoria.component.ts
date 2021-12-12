import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  categoria : Categoria = new Categoria()
  errorNombre : boolean = false
  errorDescripcion : boolean = false
  categoriaValida : boolean = true

  constructor(private categoriaService : CategoriaService, private router : Router, private notificacionService : ToastrService, private validator : ValidatorService) { }

  ngOnInit(): void {
  }

  publicar () {
    this.errorDescripcion = false
    this.errorNombre = false
    this.categoriaValida = true
    this.validarCampos()
    if(this.categoriaValida) {
      this.categoriaService.createCategoria(this.categoria).subscribe(data => {
        if(data) {
          this.notificacionService.success("Categoria creada correctamente.")
          this.irCrearCategoria()
          this.categoria = new Categoria()
        }
      })
    } else{
      this.notificacionService.error("Error en algún campo del formulario")
    }
  }

  irCrearCategoria () {
    this.router.navigate(['crearCategoria'])
  }

  validarCampos() {

    // valido que el campo nombre no esté vacio
    if(this.validator.esCampoVacio(this.categoria.nombre)) {
      this.errorNombre = true
    }
    // valido que el campo descripción no este vacio
    if(this.validator.esCampoVacio(this.categoria.descripcion)) {
      this.errorDescripcion = true
    }
    if(this.errorDescripcion || this.errorNombre) {
      this.categoriaValida = false
    }

  }

  irGestionCategorias() {
    this.router.navigate(['administrarCategorias'])
  }

}
