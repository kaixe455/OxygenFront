import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageTransform } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { Slider } from 'src/app/model/slider';
import { SliderService } from 'src/app/services/slider.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modificar-slider',
  templateUrl: './modificar-slider.component.html',
  styleUrls: ['./modificar-slider.component.css']
})
export class ModificarSliderComponent implements OnInit {

  slider !: Slider
  slider$ !: Observable<Slider>
  idSlider : number

  constructor(private sliderService : SliderService, private router: Router,private route: ActivatedRoute, private notificacionService : ToastrService ) {
    this.idSlider = this.route.snapshot.params['id'];
    this.sliderService.getSliderById(this.idSlider).subscribe(slider => this.slider = slider)
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
      this.slider.imagen = this.croppedImage.split(",")[1]
      this.sliderService.updateSlider(this.slider.id,this.slider).subscribe(data => {
        if(data) {
          this.notificacionService.success("Slider actualizado")
          this.irGestionSliders()
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

    irGestionSliders () {
      this.router.navigate(['administrarSliders'])
    }

}
