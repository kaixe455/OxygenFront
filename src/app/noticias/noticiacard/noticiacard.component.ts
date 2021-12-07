import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { NoticiaSeccion } from 'src/app/model/noticia-seccion';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NoticiaService } from 'src/app/services/noticia.service';
import { transition, style, animate, trigger } from '@angular/animations';
import { Router } from '@angular/router';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('0.7s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('0.5s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);

@Component({
  selector: 'app-noticiacard',
  templateUrl: './noticiacard.component.html',
  styleUrls: ['./noticiacard.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class NoticiacardComponent implements OnInit {

  categorias: Categoria[] = []
  categorias$!: Observable<Categoria[]>;
  noticias: NoticiaSeccion[] = []
  noticias$!: Observable<NoticiaSeccion[]>;


  constructor(private categoriasService: CategoriaService, private noticiasService: NoticiaService, private router : Router) { }

  ngOnInit(): void {
    this.categorias$ = this.categoriasService.getCategoriasConNoticia();
    this.categorias$.subscribe(categorias => this.categorias = categorias);
    this.obtenerTodas();
  }

  buscarPorCategoria (idCategoria : number) {
    this.noticias$ = this.noticiasService.getNoticiasPorCategoria(idCategoria);
    this.noticias$.subscribe(noticias => this.noticias = noticias);
  }

  obtenerTodas() {
    this.noticias$ = this.noticiasService.getAllNoticias();
    this.noticias$.subscribe(noticias => this.noticias = noticias);
  }

  visualizarNoticia(id : number) {
      this.router.navigate(['noticia', id])
  }

}
