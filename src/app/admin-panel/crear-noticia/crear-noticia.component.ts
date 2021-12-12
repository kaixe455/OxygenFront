import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ImageTransform } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { Noticia } from 'src/app/model/noticia';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NoticiaService } from 'src/app/services/noticia.service';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from 'src/app/services/validator.service';
import { UsuarioService } from 'src/app/services/usuario.service';

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
  errorTitulo : boolean = false
  errorSubtitulo : boolean = false
  errorCategorias : boolean = false
  errorContenido : boolean = false
  errorImagen : boolean = false
  noticiaValida : boolean = false


  constructor(private categoriasService: CategoriaService, private noticiasService: NoticiaService,private router: Router, private notificacionService : ToastrService, private validator : ValidatorService, private usuarioService : UsuarioService) {
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
    if(this.croppedImage) {
      this.noticia.imagen_destacada = this.croppedImage.split(",")[1]
    }
    //obtengo el autor

    if(this.usuarioService.isLoggedUser()) {
      this.usuarioService.getUsuarioLogueado().subscribe(usuario => this.noticia.autor.id = usuario.id)
    } else {
      // el usuario admin hasta securizar servicios
      this.noticia.autor.id = 6
    }
    //valido
    this.errorCategorias = false
    this.errorContenido = false
    this.errorSubtitulo = false
    this.errorTitulo = false
    this.errorImagen = false
    this.noticiaValida = true
    this.validarCampos()
    if(this.noticiaValida) {
      this.noticiasService.createNoticia(this.noticia).subscribe(data => {
        if(data) {
          this.notificacionService.success("Noticia publicada")
          this.irGestionNoticias()
        }
      })
    } else {
      this.notificacionService.error("Hay errores en el formulario")
    }
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

    validarCampos() {

      // valido que el campo titulo no esté vacio
      if(this.validator.esCampoVacio(this.noticia.titulo)) {
        this.errorTitulo = true
      }
      // valido que el campo subtitulo no este vacio
      if(this.validator.esCampoVacio(this.noticia.subtitulo)) {
        this.errorSubtitulo = true
      }
      // valido que haya selecionado al menos una categoria
      if(!this.noticia.categorias[0]) {
        this.errorCategorias = true
      }
      // valido que el campo contenido no este vacio
      if(this.validator.esCampoVacio(this.noticia.contenido)) {
        this.errorContenido = true
      }
      // valido que tenga imagen
      if(this.validator.esCampoVacio(this.noticia.imagen_destacada)) {
        this.errorImagen = true
      }
      if(this.errorTitulo || this.errorSubtitulo || this.errorCategorias || this.errorContenido || this.errorImagen) {
        this.noticiaValida = false
      }

    }



}
