import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { Noticia } from 'src/app/model/noticia';
import { CategoriaService } from 'src/app/services/categoria.service';

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


  constructor(private categoriasService: CategoriaService) {
   }

  ngOnInit(): void {
    this.categorias$ = this.categoriasService.getCategoriasConNoticia();
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
    console.log("creada noticia")
    console.log(this.noticia)
  }

  handleUpload(event : any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.noticia.imagen_destacada = (reader.result!.toString().split(",")[1]);
    };
}



}
