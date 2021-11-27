import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/model/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-editar-noticias',
  templateUrl: './editar-noticias.component.html',
  styleUrls: ['./editar-noticias.component.css']
})
export class EditarNoticiasComponent implements OnInit {

  noticias: Noticia[] = []
  noticias$!: Observable<Noticia[]>;

  constructor(private noticiasService : NoticiaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerNoticias()
  }

  obtenerNoticias() {
    this.noticias$ = this.noticiasService.getNoticiasAdmin()
    this.noticias$.subscribe(noticias => this.noticias = noticias)
  }

  borrarNoticia(id:number) {
    this.noticiasService.deleteNoticiaById(id)
    this.obtenerNoticias()
    this.irEditarNoticias()
  }

  irEditarNoticias () {
    this.router.navigate(['editarNoticias'])
  }

  modificarNoticia(id:number) {
    this.router.navigate(['modificarNoticia', id]);
  }

}
