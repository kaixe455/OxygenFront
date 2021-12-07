import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-ultimas-noticias',
  templateUrl: './ultimas-noticias.component.html',
  styleUrls: ['./ultimas-noticias.component.css']
})
export class UltimasNoticiasComponent implements OnInit {

  ultimasNoticias : any

  constructor(private noticiasService : NoticiaService, private router : Router) { }

  ngOnInit(): void {

    this.obtenerUltimasNoticias();
  }

  obtenerUltimasNoticias() {
    this.noticiasService.getNoticiasHome().subscribe(data => {
      this.ultimasNoticias = data;
    });
  }

  visualizarNoticia(id : number) {
    this.router.navigate(['noticia', id])
}

}
