import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Partido } from 'src/app/model/partido';
import { PartidoService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-proximo-partido',
  templateUrl: './proximo-partido.component.html',
  styleUrls: ['./proximo-partido.component.css']
})
export class ProximoPartidoComponent implements OnInit {

  partido !: Partido
  partido$ !: Observable<Partido>

  constructor(private partidoService : PartidoService) { }

  ngOnInit(): void {
    this.obtenerProximoPartido()
  }

  obtenerProximoPartido () {
    this.partido$ = this.partidoService.getProximoPartido()
    this.partido$.subscribe(partido => this.partido = partido)
  }

}
