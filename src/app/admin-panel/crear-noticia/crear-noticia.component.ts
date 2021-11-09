import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { Noticia } from 'src/app/model/noticia';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.css']
})
export class CrearNoticiaComponent implements OnInit {

  noticia: Noticia = new Noticia();
  categorias: Categoria[] = []
  categorias$!: Observable<Categoria[]>;
  dropdownList : any[] = [];
  selectedItems : Categoria[] = [];
  dropdownSettings = {};


  constructor(private categoriasService: CategoriaService, private noticiasService: NoticiaService,private router: Router) {
   }

  ngOnInit(): void {
    this.categorias$ = this.categoriasService.getCategoriasAll();
    this.categorias$.subscribe(categorias => {
      this.categorias = categorias
      this.dropdownList = categorias
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nombre',
      selectAllText: 'Todas',
      unSelectAllText: 'Deseleccionar todas',
      itemsShowLimit: 5,
    }
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems)
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  publicar() {
    this.noticia.autor.id = 6
    this.noticiasService.createNoticia(this.noticia).subscribe(data => {
      this.irGestionNoticias()
    })
  }

  handleUpload(event : any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.noticia.imagen_destacada = (reader.result!.toString().split(",")[1]);
    };
  }

  irGestionNoticias () {
    this.router.navigate(['editarNoticias'])
  }



}
