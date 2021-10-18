import { Rol } from "./rol";

export class Usuario {
  id:                number;
  nombre:            string;
  primer_apellido:   string;
  segundo_apellido:  string;
  correoElectronico: string;
  nickname:          string;
  password:          string;
  fx_creacion_fx:    Date;
  twitter:           string;
  twitch:            string;
  rol:               Rol;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.primer_apellido = '';
    this.segundo_apellido = '';
    this.correoElectronico = '';
    this.nickname = '';
    this.password = '';
    this.fx_creacion_fx = new Date();
    this.twitch = '';
    this.twitter = '';
    this.rol = new Rol();
  }

}
