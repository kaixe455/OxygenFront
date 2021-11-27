import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageTransform } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { Juego } from 'src/app/model/juego';
import { Jugador } from 'src/app/model/jugador';
import { JuegoService } from 'src/app/services/juego.service';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-modificar-jugador',
  templateUrl: './modificar-jugador.component.html',
  styleUrls: ['./modificar-jugador.component.css']
})
export class ModificarJugadorComponent implements OnInit {

  juegos: Juego[] = []
  juegos$!: Observable<Juego[]>
  jugador !: Jugador
  jugador$!: Observable<Jugador[]>;
  idJugador : number

  constructor(private jugadoresService : JugadorService, private router: Router,private route: ActivatedRoute,private juegosService : JuegoService) {
    this.idJugador = this.route.snapshot.params['id'];
    this.jugadoresService.getJugadorById(this.idJugador).subscribe(jugador => this.jugador = jugador)
   }

  ngOnInit(): void {
    this.juegos$ = this.juegosService.getJuegosAll()
    this.juegos$.subscribe(juegos => {
      this.juegos = juegos
    });
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
      this.jugador.foto = this.croppedImage.split(",")[1]
      console.log(this.jugador)
      this.jugadoresService.updateJugador(this.jugador.id,this.jugador).subscribe(data => {
        this.irAdministrarJugadores()
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.scale = 1;
        this.transform = {};
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

    irAdministrarJugadores() {
      this.router.navigate(['administrarJugadores'])
    }

}
