import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../model/juego';
import { Jugador } from '../model/jugador';
import { JuegoService } from '../services/juego.service';
import { JugadorService } from '../services/jugador.service';
import { transition, style, animate, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('0.7s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('0.5s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class EquiposComponent implements OnInit {

  juegos : Juego[] = []
  juegos$ : Observable<Juego[]>
  jugadores : Jugador[] = []
  jugadores$ !: Observable<Jugador[]>

  constructor(private juegosService : JuegoService, private jugadoresService : JugadorService) {
    this.juegos$ = this.juegosService.getJuegosAll()
    this.juegos$.subscribe(juegos => {
      this.juegos = juegos
      this.jugadores$ = this.jugadoresService.getJugadoresByJuego(this.juegos[0].id)
      this.jugadores$.subscribe(jugadores => this.jugadores = jugadores)
    })
   }

  ngOnInit(): void {
  }

  obtenerJugadorPorJuego(idJuego : number) {
    this.jugadores$ = this.jugadoresService.getJugadoresByJuego(idJuego)
    this.jugadores$.subscribe(jugadores => this.jugadores = jugadores)
  }

}
