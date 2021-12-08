import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modificar-categorias',
  templateUrl: './modificar-categorias.component.html',
  styleUrls: ['./modificar-categorias.component.css']
})
export class ModificarCategoriasComponent implements OnInit {

  categoria !: Categoria
  categoria$ !: Observable<Categoria>
  idCategoria : number


  constructor(private categoriaService : CategoriaService, private router: Router,private route: ActivatedRoute, private notificacionService : ToastrService) {

    this.idCategoria = this.route.snapshot.params['id'];
    this.categoriaService.getCategoriaById(this.idCategoria).subscribe(categoria => this.categoria = categoria)
   }

  ngOnInit(): void {
  }

  publicar() {
    this.categoriaService.updateCategoria(this.categoria.id,this.categoria).subscribe(data => {
      if(data) {
        this.notificacionService.success("Categoría actualizada correctamente")
        this.irGestionCategorias()
      }
    })
  }

  irGestionCategorias () {
    this.router.navigate(['administrarCategorias'])
  }

}
