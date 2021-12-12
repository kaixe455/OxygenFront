import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-administrar-categorias',
  templateUrl: './administrar-categorias.component.html',
  styleUrls: ['./administrar-categorias.component.css']
})
export class AdministrarCategoriasComponent implements OnInit {

  categorias: Categoria[] = []
  categorias$!: Observable<Categoria[]>;
  cargado : boolean

  constructor(private categoriasService : CategoriaService, private router: Router, private notificacionService : ToastrService) {
    this.cargado = false
   }

  ngOnInit(): void {
    this.obtenerCategorias()
  }

  obtenerCategorias() {
    this.categorias$ = this.categoriasService.getCategoriasAll()
    this.categorias$.subscribe(categorias => {this.categorias = categorias
    this.cargado = true
    })
  }

  borrarCategoria(id:number) {
    this.categoriasService.deleteCategoriaById(id)
    this.notificacionService.success("Categoria eliminada")
    this.cargado = false
    this.obtenerCategorias()
  }

  irAdministrarCategorias () {
    this.router.navigate(['administrarCategorias'])
  }

  modificarCategoria(id:number) {
    this.router.navigate(['modificarCategoria', id]);
  }

  irCrearCategoria() {
      this.router.navigate(['crearCategoria']);

  }
}
