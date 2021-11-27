import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Slider } from 'src/app/model/slider';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-administrar-sliders',
  templateUrl: './administrar-sliders.component.html',
  styleUrls: ['./administrar-sliders.component.css']
})
export class AdministrarSlidersComponent implements OnInit {

  sliders : Slider[] = []
  sliders$ !: Observable<Slider[]>

  constructor(private sliderService : SliderService, private router: Router ) { }

  ngOnInit(): void {
    this.obtenerSliders()
  }

  obtenerSliders() {
    this.sliders$ = this.sliderService.getSliders()
    this.sliders$.subscribe(sliders => this.sliders = sliders)
  }

  modificarSlider(id : number) {
    this.router.navigate(['modificarSlider', id])
  }

}
