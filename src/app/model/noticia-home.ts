import { Categoria } from "./categoria";
import { Usuario } from "./usuario";

export interface NoticiaHome {
  id:                number;
  titulo:            string;
  subtitulo:         string;
  contenido:         string;
  imagen_destacada:  string;
  fx_publicacion_fx: Date;
  fx_edicion_fx:     Date;
  categorias:        Categoria[];
}
