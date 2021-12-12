import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageTransform } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { Juego } from 'src/app/model/juego';
import { Jugador } from 'src/app/model/jugador';
import { JuegoService } from 'src/app/services/juego.service';
import { JugadorService } from 'src/app/services/jugador.service';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-jugador.component.html',
  styleUrls: ['./crear-jugador.component.css']
})
export class CrearJugadorComponent implements OnInit {

  juegos: Juego[] = []
  juegos$!: Observable<Juego[]>
  jugador : Jugador = new Jugador
  errorNombre : boolean = false
  errorPrimerApellido : boolean = false
  errorNickname : boolean = false
  errorJuego : boolean = false
  errorTwitter : boolean = false
  errorTwitch : boolean = false
  errorRol : boolean = false
  jugadorValido : boolean = true

  constructor(private jugadorService: JugadorService, private juegosService: JuegoService,private router: Router, private notificacionService : ToastrService, private validator : ValidatorService) { }

  ngOnInit(): void {
    this.juegos$ = this.juegosService.getJuegosAll()
    this.juegos$.subscribe(juegos => {
      this.juegos = juegos
    });

  }

    imageChangedEvent: any = ''
    croppedImage: any = ''
    scale = 1
    transform: ImageTransform = {}

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: any) {
        this.croppedImage = event.base64;
    }

    publicar() {
      this.jugador.foto = this.croppedImage.split(",")[1]
      this.errorPrimerApellido = false
      this.errorNombre = false
      this.errorJuego = false
      this.errorNickname = false
      this.errorRol = false
      this.errorTwitch = false
      this.errorTwitter = false
      this.jugadorValido = true
      this.validarCampos()
      if(this.jugadorValido) {
        this.jugadorService.createJugador(this.jugador).subscribe(data => {
          if(data) {
            this.notificacionService.success("Jugador creado correctamente")
            this.irCrearJugador()
            this.jugador = new Jugador()
            this.imageChangedEvent = ''
            this.croppedImage = ''
            this.scale = 1
            this.transform = {}
          }
        })
      }else{
        this.notificacionService.error("Error en algún campo del formulario")
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

    irCrearJugador() {
      this.router.navigate(['crearJugador'])
    }

    validarCampos() {

      // valido que el campo nombre no esté vacio
      if(this.validator.esCampoVacio(this.jugador.nombre)) {
        this.errorNombre = true
      }
      // valido que el campo primer apellido no este vacio
      if(this.validator.esCampoVacio(this.jugador.apellido1)) {
        this.errorPrimerApellido = true
      }
      // valido que el campo nickname no este vacio
      if(this.validator.esCampoVacio(this.jugador.nickname)) {
        this.errorNickname = true
      }
      // valido que el campo twitch sea una url cuando no esta vacio
      if(!this.validator.esCampoVacio(this.jugador.twitch) && !this.validator.esUrl(this.jugador.twitch)) {
        this.errorTwitch = true
      }
      // valido que el campo twitter sea una url cuando no esta vacio
      if(!this.validator.esCampoVacio(this.jugador.twitter) && !this.validator.esUrl(this.jugador.twitter)) {
        this.errorTwitter = true
      }
      // valido que se haya seleccionado un juego
      if(this.jugador.juego.id == 0) {
        this.errorJuego = true
      }
      // valido que se haya indicado un rol en el equipo
      if(this.validator.esCampoVacio(this.jugador.rol_equipo)) {
        this.errorRol = true
      }

      if(this.errorPrimerApellido || this.errorNombre || this.errorJuego || this.errorNickname || this.errorRol || this.errorTwitch || this.errorTwitter) {
        this.jugadorValido = false
      }

    }

    irGestionarJugadores() {
      this.router.navigate(['administrarJugadores'])
    }

}
