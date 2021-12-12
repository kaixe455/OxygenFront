import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageTransform } from 'ngx-image-cropper';
import { Patrocinador } from 'src/app/model/patrocinador';
import { PatrocinadorService } from 'src/app/services/patrocinador.service';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-modificar-patrocinador',
  templateUrl: './modificar-patrocinador.component.html',
  styleUrls: ['./modificar-patrocinador.component.css']
})
export class ModificarPatrocinadorComponent implements OnInit {

  patrocinador !: Patrocinador
  idPatrocinador : number
  errorNombre : boolean = false
  errorDescripcion : boolean = false
  errorWeb : boolean = false
  errorLogo: boolean = false
  patrocinadorValido : boolean = false

  constructor(private patrocinadorService : PatrocinadorService,private router: Router,private route: ActivatedRoute, private notificacionService : ToastrService, private validator : ValidatorService) {

    this.idPatrocinador = this.route.snapshot.params['id'];
    this.patrocinadorService.getPatrocinadorById(this.idPatrocinador).subscribe(patrocinador => this.patrocinador = patrocinador)

  }

  ngOnInit(): void {
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

    publicar() {
      if(this.croppedImage != '') {
        this.patrocinador.logo = this.croppedImage.split(",")[1]
      }
      this.errorNombre = false
      this.errorDescripcion = false
      this.errorWeb = false
      this.errorLogo = false
      this.patrocinadorValido = true
      this.validarCampos()
      if(this.patrocinadorValido) {
        this.patrocinadorService.updatePatrocinador(this.patrocinador.id,this.patrocinador).subscribe(data => {
          if(data) {
            this.notificacionService.success("Patrocinador modificado correctamente.")
            this.irGestionPatrocinadores()
            this.imageChangedEvent = ''
            this.croppedImage = ''
            this.scale = 1
            this.transform = {}
          }
        })
      } else {
        this.notificacionService.error("Hay errores en el formulario")
      }
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

    irGestionPatrocinadores () {
      this.router.navigate(['administrarPatrocinadores'])
    }

    validarCampos() {

      // valido que el campo nombre no esté vacio
      if(this.validator.esCampoVacio(this.patrocinador.nombre)) {
        this.errorNombre = true
      }
      // valido que el campo descripcion no este vacio
      if(this.validator.esCampoVacio(this.patrocinador.descripcion)) {
        this.errorDescripcion = true
      }
      // valido que el campo pagina web no este vacio y tenga formato web
      if(this.validator.esCampoVacio(this.patrocinador.urlEmpresa)) {
        this.errorWeb = true
      }else {
        if(!this.validator.esUrl(this.patrocinador.urlEmpresa)) {
          this.errorWeb = true
        }
      }
      // valido que tenga logo
      if(this.validator.esCampoVacio(this.patrocinador.logo)) {
        this.errorLogo = true
      }
      if(this.errorLogo || this.errorNombre || this.errorDescripcion || this.errorWeb) {
        this.patrocinadorValido = false
      }

    }

}
