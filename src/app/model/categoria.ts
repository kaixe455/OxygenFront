import { Noticia } from "./noticia";

export class Categoria {
  id:          number;
  nombre:      string;
  descripcion: string;
  noticias: null;

  constructor () {
    this.id = 0
    this.nombre = ""
    this.descripcion = ""
    this.noticias = null
  }
}
