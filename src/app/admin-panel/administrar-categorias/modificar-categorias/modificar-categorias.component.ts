import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-modificar-categorias',
  templateUrl: './modificar-categorias.component.html',
  styleUrls: ['./modificar-categorias.component.css']
})
export class ModificarCategoriasComponent implements OnInit {

  categoria !: Categoria
  categoria$ !: Observable<Categoria>
  idCategoria : number
  errorNombre : boolean = false
  errorDescripcion : boolean = false
  categoriaValida : boolean = true


  constructor(private categoriaService : CategoriaService, private router: Router,private route: ActivatedRoute, private notificacionService : ToastrService, private validator : ValidatorService) {

    this.idCategoria = this.route.snapshot.params['id'];
    this.categoriaService.getCategoriaById(this.idCategoria).subscribe(categoria => this.categoria = categoria)
   }

  ngOnInit(): void {
  }

  publicar() {
    this.errorDescripcion = false
    this.errorNombre = false
    this.categoriaValida = true
    this.validarCampos()
      if(this.categoriaValida) {
      this.categoriaService.updateCategoria(this.categoria.id,this.categoria).subscribe(data => {
        if(data) {
          this.notificacionService.success("Categoría actualizada correctamente")
          this.irGestionCategorias()
        }
      })
    } else {
      this.notificacionService.error("Error en algún campo del formulario")
    }
  }

  irGestionCategorias () {
    this.router.navigate(['administrarCategorias'])
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

}
