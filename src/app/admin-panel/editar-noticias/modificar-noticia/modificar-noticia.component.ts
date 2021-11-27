import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageTransform } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { Noticia } from 'src/app/model/noticia';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-modificar-noticia',
  templateUrl: './modificar-noticia.component.html',
  styleUrls: ['./modificar-noticia.component.css']
})
export class ModificarNoticiaComponent implements OnInit {

  noticia !: Noticia
  noticia$ !: Observable<Noticia>
  categorias: Categoria[] = []
  categorias$!: Observable<Categoria[]>
  dropdownList : any[] = [];
  selectedItems : Categoria[] = []
  dropdownSettings = {}
  idNoticia : number

  constructor(private categoriasService: CategoriaService, private noticiasService: NoticiaService,private router: Router,private route: ActivatedRoute) {
    this.idNoticia = this.route.snapshot.params['id'];
    this.noticiasService.getNoticiaById(this.idNoticia).subscribe(noticia => {
      this.noticia = noticia
      this.selectedItems = this.noticia.categorias
    })
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nombre',
      selectAllText: 'Todas',
      unSelectAllText: 'Deseleccionar todas',
      itemsShowLimit: 5,
    }
   }

  ngOnInit(): void {
    this.categorias$ = this.categoriasService.getCategoriasAll();
    this.categorias$.subscribe(categorias => {
      this.categorias = categorias
      this.dropdownList = categorias
    });
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems)
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  publicar() {
    if(this.croppedImage) {
      this.noticia.imagen_destacada = this.croppedImage.split(",")[1]
    }
    this.noticia.autor.id = 6
    this.noticiasService.updateNoticia(this.noticia.id,this.noticia).subscribe(data => {
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

  imageChangedEvent: any = '';
    croppedImage: any = '';
    scale = 1;
    transform: ImageTransform = {};

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: any) {
        this.croppedImage = event.base64;
    }

    zoomOut() {
      this.scale -= .1;
      this.transform = {
          ...this.transform,
          scale: this.scale
      };
    }

    zoomIn() {
      this.scale += .1;
      this.transform = {
          ...this.transform,
          scale: this.scale
      };
    }

}
