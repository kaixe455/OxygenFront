import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageTransform } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { Juego } from 'src/app/model/juego';
import { JuegoService } from 'src/app/services/juego.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-modificar-juego',
  templateUrl: './modificar-juego.component.html',
  styleUrls: ['./modificar-juego.component.css']
})
export class ModificarJuegoComponent implements OnInit {

  juego !: Juego
  juego$ !: Observable<Juego>
  idJuego : number

  constructor(private juegoService : JuegoService, private router: Router,private route: ActivatedRoute, private notificacionService : ToastrService) {
    this.idJuego = this.route.snapshot.params['id'];
    this.juegoService.getJuegoById(this.idJuego).subscribe(juego => this.juego = juego)
   }

  ngOnInit(): void {
  }

  publicar() {
    this.juego.logo = this.croppedImage.split(",")[1]
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

}
