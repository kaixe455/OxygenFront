import { Rol } from "./rol";

export interface Usuario {
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
}
