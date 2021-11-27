import { Equipo } from "./equipo";
import { Juego } from "./juego";

export class Partido {
  id:                  number;
  juego:               Juego;
  equipoLocal:         Equipo;
  equipoVisitante:     Equipo;
  fx_inicio_fx:        Date;
  competicion:         string;
  check_finalizado:    boolean;
  puntuacionLocal:     number;
  puntuacionVisitante: number;

  constructor () {
    this.id = 0
    this.juego = new Juego()
    this.equipoLocal = new Equipo()
    this.equipoVisitante = new Equipo()
    this.fx_inicio_fx = new Date()
    this.competicion = ''
    this.check_finalizado = false
    this.puntuacionLocal = -1
    this.puntuacionVisitante = -1
  }
}
