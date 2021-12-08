import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageTransform } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { Equipo } from 'src/app/model/equipo';
import { EquipoService } from 'src/app/services/equipo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modificar-equipo',
  templateUrl: './modificar-equipo.component.html',
  styleUrls: ['./modificar-equipo.component.css']
})
export class ModificarEquipoComponent implements OnInit {

  equipo !: Equipo
  equipo$ !: Observable<Equipo>
  idEquipo : number

  constructor(private equipoService : EquipoService, private router: Router,private route: ActivatedRoute, private notificacionService : ToastrService) {
    this.idEquipo = this.route.snapshot.params['id'];
    this.equipoService.getEquipoById(this.idEquipo).subscribe(equipo => this.equipo = equipo)
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
      this.equipo.logo = this.croppedImage.split(",")[1]
      console.log(this.equipo)
      this.equipoService.updateEquipo(this.equipo.id,this.equipo).subscribe(data => {
        if(data) {
        this.notificacionService.success("Equipo actualizado correctamente")
        this.irGestionEquipos()
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

    irGestionEquipos () {
      this.router.navigate(['administrarEquipos'])
    }

}
