import { Categoria } from "./categoria";
import { Usuario } from "./usuario";

export class Noticia {
  id:                number;
  titulo:            string;
  subtitulo:         string;
  contenido:         string;
  imagen_destacada:  string;
  autor:             Usuario;
  fx_publicacion_fx: Date;
  fx_edicion_fx:     Date;
  categorias:        Categoria[];

  constructor () {
    this.id=0
    this.titulo=''
    this.subtitulo = ''
    this.contenido = ''
    this.imagen_destacada = ''
    this.autor = new Usuario
    this.fx_publicacion_fx = new Date
    this.fx_edicion_fx = new Date
    this.categorias = []
  }

}

