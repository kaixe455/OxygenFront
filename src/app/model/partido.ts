import { Equipo } from "./equipo";
import { Juego } from "./juego";

export interface Partido {
  id:                  number;
  juego:               Juego;
  equipoLocal:         Equipo;
  equipoVisitante:     Equipo;
  fx_inicio_fx:        Date;
  competicion:         string;
  check_finalizado:    boolean;
  puntuacionLocal:     number;
  puntuacionVisitante: number;
}
