import { Categoria } from "./categoria";

export interface NoticiaSeccion {
  id:                number;
  titulo:            string;
  subtitulo:         string;
  contenido:         string;
  imagen_destacada:  string;
  fx_publicacion_fx: Date;
  fx_edicion_fx:     Date;
  categorias:        Categoria[];
}
