import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Jugador } from 'src/app/model/jugador';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-administrar-jugadores',
  templateUrl: './administrar-jugadores.component.html',
  styleUrls: ['./administrar-jugadores.component.css']
})
export class AdministrarJugadoresComponent implements OnInit {

  jugadores : Jugador[] = []
  jugadores$ !: Observable<Jugador[]>

  constructor(private jugadoresService : JugadorService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerJugadores()
  }

  obtenerJugadores() {
    this.jugadores$ = this.jugadoresService.getJugadoresAll()
    this.jugadores$.subscribe(jugadores => this.jugadores = jugadores)
  }

  borrarJugador(id:number) {
    this.jugadoresService.deleteJugadorById(id)
    this.obtenerJugadores()
    this.irGestionarJugadores();
  }

  irGestionarJugadores () {
    this.router.navigate(['administrarJugadores'])
  }

  modificarJugador(id:number) {
    this.router.navigate(['modificarJugador', id])
  }

}