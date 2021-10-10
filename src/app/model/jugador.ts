import { Juego } from "./juego";

export interface Jugador {
  id:         number;
  nombre:     string;
  apellido1:  string;
  apellido2:  string;
  nickname:   string;
  twitter:    string;
  twitch:     string;
  juego:      Juego;
  foto:       string;
  rol_equipo: string;
}
