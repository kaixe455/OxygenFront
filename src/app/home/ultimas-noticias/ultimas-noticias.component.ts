import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-ultimas-noticias',
  templateUrl: './ultimas-noticias.component.html',
  styleUrls: ['./ultimas-noticias.component.css']
})
export class UltimasNoticiasComponent implements OnInit {

  ultimasNoticias : any

  constructor(private noticiasService : NoticiaService) { }

  ngOnInit(): void {

    this.obtenerUltimasNoticias();
  }

  obtenerUltimasNoticias() {
    this.noticiasService.getNoticiasAll().subscribe(data => {
      this.ultimasNoticias = data;
    });
  }

}
