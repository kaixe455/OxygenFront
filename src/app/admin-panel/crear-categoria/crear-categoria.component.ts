import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  categoria : Categoria = new Categoria()

  constructor(private categoriaService : CategoriaService, private router : Router, private notificacionService : ToastrService) { }

  ngOnInit(): void {
  }

  publicar () {
    this.categoriaService.createCategoria(this.categoria).subscribe(data => {
      if(data) {
        this.notificacionService.success("Categoria creada correctamente.")
        this.irCrearCategoria()
        this.categoria = new Categoria()
      }
    })
  }

  irCrearCategoria () {
    this.router.navigate(['crearCategoria'])
  }

}
