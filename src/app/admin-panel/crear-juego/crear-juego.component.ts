import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageTransform } from 'ngx-image-cropper';
import { Juego } from 'src/app/model/juego';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-crear-juego',
  templateUrl: './crear-juego.component.html',
  styleUrls: ['./crear-juego.component.css']
})
export class CrearJuegoComponent implements OnInit {

  juego : Juego = new Juego()

  constructor( private juegoService : JuegoService, private router: Router ) { }

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
      this.juego.logo = this.croppedImage.split(",")[1]
      console.log(this.juego)
      this.juegoService.createJuego(this.juego).subscribe(data => {
        this.irAdministrarJuego()
        this.juego = new Juego()
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

    irCrearJuego () {
      this.router.navigate(['crearJuego'])
    }

    irAdministrarJuego () {
      this.router.navigate(['administrarJuegos'])
    }

}
