import { Categoria } from "./categoria";
import { Usuario } from "./usuario";

export interface Noticia {
  id:                number;
  titulo:            string;
  subtitulo:         string;
  contenido:         string;
  imagen_destacada:  string;
  autor:             Usuario;
  fx_publicacion_fx: Date;
  fx_edicion_fx:     Date;
  categorias:        Categoria[];
}
