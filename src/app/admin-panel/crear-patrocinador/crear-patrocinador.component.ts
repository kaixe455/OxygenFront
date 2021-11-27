import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageTransform } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { Patrocinador } from 'src/app/model/patrocinador';
import { PatrocinadorService } from 'src/app/services/patrocinador.service';

@Component({
  selector: 'app-crear-patrocinador',
  templateUrl: './crear-patrocinador.component.html',
  styleUrls: ['./crear-patrocinador.component.css']
})
export class CrearPatrocinadorComponent implements OnInit {

  patrocinador : Patrocinador = new Patrocinador()

  constructor(private patrocinadorService : PatrocinadorService, private router: Router) { }

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
      this.patrocinador.logo = this.croppedImage.split(",")[1]
      console.log(this.patrocinador)
      this.patrocinadorService.createPatrocinador(this.patrocinador).subscribe(data => {
        this.irCrearPatrocinador()
        this.patrocinador = new Patrocinador()
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

    irCrearPatrocinador () {
      this.router.navigate(['crearPatrocinador'])
    }

}
