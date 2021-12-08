import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageTransform } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { Juego } from 'src/app/model/juego';
import { Jugador } from 'src/app/model/jugador';
import { JuegoService } from 'src/app/services/juego.service';
import { JugadorService } from 'src/app/services/jugador.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-jugador.component.html',
  styleUrls: ['./crear-jugador.component.css']
})
export class CrearJugadorComponent implements OnInit {

  juegos: Juego[] = []
  juegos$!: Observable<Juego[]>;
  jugador : Jugador = new Jugador

  constructor(private jugadorService: JugadorService, private juegosService: JuegoService,private router: Router, private notificacionService : ToastrService) { }

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

}
