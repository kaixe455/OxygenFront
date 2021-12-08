import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patrocinador } from '../model/patrocinador';
import { PatrocinadorService } from '../services/patrocinador.service';

@Component({
  selector: 'app-patrocinadores',
  templateUrl: './patrocinadores.component.html',
  styleUrls: ['./patrocinadores.component.css']
})
export class PatrocinadoresComponent implements OnInit {

  patrocinadores : Patrocinador[] = []
  patrocinadores$ !: Observable<Patrocinador[]>

  constructor(private patrocinadoresService : PatrocinadorService) {
    this.patrocinadores$ = this.patrocinadoresService.getPatrocinadoresAll()
    this.patrocinadores$.subscribe(patrocinadores => this.patrocinadores = patrocinadores)
   }

  ngOnInit(): void {
  }

}
