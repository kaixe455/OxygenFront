import { Component, OnInit, ViewChild } from '@angular/core';
import { Equipo } from 'src/app/model/equipo';
import { ImageCroppedEvent, ImageCropperComponent, ImageTransform, LoadedImage } from 'ngx-image-cropper';
import { EquipoService } from 'src/app/services/equipo.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {

  equipo: Equipo = new Equipo();

  constructor( private equipoService : EquipoService, private router: Router, private notificacionService : ToastrService) { }
   ngOnInit(): void {
  }

    imageChangedEvent: any = ''
    croppedImage: any = ''
    scale = 1
    transform: ImageTransform = {}

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event
    }
    imageCropped(event: any) {
        this.croppedImage = event.base64
    }

    publicar() {
      this.equipo.logo = this.croppedImage.split(",")[1]
      console.log(this.equipo)
      this.equipoService.createEquipo(this.equipo).subscribe(data => {
        if(data) {
          this.notificacionService.success("Equipo creado correctamente")
          this.irCrearEquipo()
          this.equipo = new Equipo()
          this.imageChangedEvent = '';
          this.croppedImage = '';
          this.scale = 1;
          this.transform = {};
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

    irCrearEquipo () {
      this.router.navigate(['crearEquipo'])
    }

}
