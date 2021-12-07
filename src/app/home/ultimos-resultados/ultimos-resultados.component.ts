import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Partido } from 'src/app/model/partido';
import { PartidoService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-ultimos-resultados',
  templateUrl: './ultimos-resultados.component.html',
  styleUrls: ['./ultimos-resultados.component.css']
})
export class UltimosResultadosComponent implements OnInit {

  partidos : Partido[] = []
  partidos$ : Observable<Partido[]>

  constructor(private partidosService : PartidoService) {
    this.partidos$ = this.partidosService.getUltimosResultados()
    this.partidosService.getUltimosResultados().subscribe(partidos => this.partidos = partidos)
   }

  ngOnInit(): void {
  }

}
