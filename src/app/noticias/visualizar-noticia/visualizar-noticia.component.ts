import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/model/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-visualizar-noticia',
  templateUrl: './visualizar-noticia.component.html',
  styleUrls: ['./visualizar-noticia.component.css']
})
export class VisualizarNoticiaComponent implements OnInit {

  noticia : Noticia = new Noticia()
  noticia$ : Observable<Noticia>
  idNoticia : number

  constructor(private noticiaService : NoticiaService,private router: Router,private route: ActivatedRoute) {
    this.idNoticia = this.route.snapshot.params['id'];
     this.noticia$ = this.noticiaService.getNoticiaById(this.idNoticia)
     this.noticia$.subscribe(noticia => this.noticia = noticia)
   }

  ngOnInit(): void {
  }

}
