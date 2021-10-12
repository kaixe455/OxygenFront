import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Slider } from 'src/app/model/slider';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {

  sliders: any

  constructor(private sliderService : SliderService, private router: Router) {
   }

  ngOnInit(): void {

    this.recargarDatos();
  }

  recargarDatos()  {
    this.sliderService.getSliders().subscribe(data => {
      this.sliders = data;
      console.log(this.sliders);
    });

  }

}
