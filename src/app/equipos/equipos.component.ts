import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../model/juego';
import { JuegoService } from '../services/juego.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  juegos : Juego[] = []
  juegos$ : Observable<Juego[]>

  constructor(private juegosService : JuegoService) {
    this.juegos$ = juegosService.getJuegosAll()
    this.juegos$.subscribe(juegos => this.juegos = juegos)
   }

  ngOnInit(): void {
  }

}
