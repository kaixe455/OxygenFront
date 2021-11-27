import { Juego } from "./juego";

export class Jugador {
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

  constructor() {
    this.id = 0
    this.nombre = ''
    this.apellido1 = ''
    this.apellido2 = ''
    this.nickname = ''
    this.twitter = ''
    this.twitch = ''
    this.juego = new Juego
    this.foto = ''
    this.rol_equipo = ''
  }
}
