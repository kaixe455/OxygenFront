import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patrocinador } from 'src/app/model/patrocinador';
import { PatrocinadorService } from 'src/app/services/patrocinador.service';

@Component({
  selector: 'app-carrousel-patrocinadores',
  templateUrl: './carrousel-patrocinadores.component.html',
  styleUrls: ['./carrousel-patrocinadores.component.css']
})
export class CarrouselPatrocinadoresComponent implements OnInit {

  patrocinadores : Patrocinador[] = []
  patrocinadores$ : Observable<Patrocinador[]>

  constructor(private patrocinadorService : PatrocinadorService) {
    this.patrocinadores$ = patrocinadorService.getPatrocinadoresAll()
    this.patrocinadores$.subscribe(patrocinadores => this.patrocinadores = patrocinadores)
   }

  ngOnInit(): void {
  }

}
