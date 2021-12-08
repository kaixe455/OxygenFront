import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageTransform } from 'ngx-image-cropper';
import { Patrocinador } from 'src/app/model/patrocinador';
import { PatrocinadorService } from 'src/app/services/patrocinador.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modificar-patrocinador',
  templateUrl: './modificar-patrocinador.component.html',
  styleUrls: ['./modificar-patrocinador.component.css']
})
export class ModificarPatrocinadorComponent implements OnInit {

  patrocinador !: Patrocinador
  idPatrocinador : number

  constructor(private patrocinadorService : PatrocinadorService,private router: Router,private route: ActivatedRoute, private notificacionService : ToastrService) {

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

}
