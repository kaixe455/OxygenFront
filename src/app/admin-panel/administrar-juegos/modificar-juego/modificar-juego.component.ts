import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageTransform } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { Juego } from 'src/app/model/juego';
import { JuegoService } from 'src/app/services/juego.service';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from 'src/app/services/validator.service';


@Component({
  selector: 'app-modificar-juego',
  templateUrl: './modificar-juego.component.html',
  styleUrls: ['./modificar-juego.component.css']
})
export class ModificarJuegoComponent implements OnInit {

  juego !: Juego
  juego$ !: Observable<Juego>
  idJuego : number
  errorNombre : boolean = false
  errorLogo : boolean = false
  juegoValido : boolean = true

  constructor(private juegoService : JuegoService, private router: Router,private route: ActivatedRoute, private notificacionService : ToastrService, private validator : ValidatorService) {
    this.idJuego = this.route.snapshot.params['id'];
    this.juegoService.getJuegoById(this.idJuego).subscribe(juego => this.juego = juego)
   }

  ngOnInit(): void {
  }

  publicar() {
    if(this.croppedImage.split(",")[1]) {
      this.juego.logo = this.croppedImage.split(",")[1]
    }
    this.errorLogo = false
    this.errorNombre = false
    this.juegoValido = true
    this.validarCampos()
    if(this.juegoValido) {
      this.juegoService.updateJuego(this.juego.id,this.juego).subscribe(data => {
        if(data) {
          this.notificacionService.success("Juego modificado correctamente.")
          this.imageChangedEvent = ''
          this.croppedImage = ''
          this.scale = 1
          this.transform = {};
          this.irGestionJuegos()
        }
      })
    }else{
      this.notificacionService.error("Error en algún campo del formulario")
    }
  }

  irGestionJuegos () {
    this.router.navigate(['administrarJuegos'])
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

      // valido que el campo nombre no esté vacio
      if(this.validator.esCampoVacio(this.juego.nombre)) {
        this.errorNombre = true
      }
      // valido que el campo logo no este vacio
      if(this.validator.esCampoVacio(this.juego.logo)) {
        this.errorLogo = true
      }
      if(this.errorLogo || this.errorNombre) {
        this.juegoValido = false
      }

    }

}
