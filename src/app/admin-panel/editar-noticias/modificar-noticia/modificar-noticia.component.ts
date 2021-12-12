import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageTransform } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { Noticia } from 'src/app/model/noticia';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NoticiaService } from 'src/app/services/noticia.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { ValidatorService } from 'src/app/services/validator.service';

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
  loggedUser !: Usuario
  loggedUser$ !: Observable<Usuario>
  errorTitulo : boolean = false
  errorSubtitulo : boolean = false
  errorCategorias : boolean = false
  errorContenido : boolean = false
  errorImagen : boolean = false
  noticiaValida : boolean = false

  constructor(private categoriasService: CategoriaService, private noticiasService: NoticiaService
    ,private router: Router,private route: ActivatedRoute, private notificacionService : ToastrService
    , private usuarioService : UsuarioService, private validator : ValidatorService) {
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
    this.loggedUser$ = this.usuarioService.getUsuarioLogueado()
    if(this.loggedUser$) {
      this.loggedUser$.subscribe(usuario => {
        this.loggedUser = usuario
      })
    } else {
      this.notificacionService.info("Necesita iniciar sesión para usar esta funcionalidad")
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
    if(this.loggedUser) {
      this.noticia.autor.id = this.loggedUser.id
      this.errorCategorias = false
      this.errorContenido = false
      this.errorSubtitulo = false
      this.errorTitulo = false
      this.errorImagen = false
      this.noticiaValida = true
      this.validarCampos()
      if(this.noticiaValida) {
        this.noticiasService.updateNoticia(this.noticia.id,this.noticia).subscribe(data => {
          if(data) {
            this.notificacionService.success("Noticia modificada correctamente")
            this.irGestionNoticias()
          }
        })
      } else {
        this.notificacionService.error("Hay errores en el formulario")
      }
    }else {
      this.notificacionService.info("Necesita iniciar sesión para usar esta funcionalidad")
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
