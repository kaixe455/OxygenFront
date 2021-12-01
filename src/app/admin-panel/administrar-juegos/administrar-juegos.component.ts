import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Juego } from 'src/app/model/juego';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-administrar-juegos',
  templateUrl: './administrar-juegos.component.html',
  styleUrls: ['./administrar-juegos.component.css']
})
export class AdministrarJuegosComponent implements OnInit {

  juegos: Juego[] = []
  juegos$!: Observable<Juego[]>;
  cargado : boolean

  constructor(private juegosService : JuegoService, private router: Router) {
    this.cargado = false
   }

  ngOnInit(): void {
    this.obtenerJuegos()
  }

  obtenerJuegos() {
    this.juegos$ = this.juegosService.getJuegosAll()
    this.juegos$.subscribe(juegos => {this.juegos = juegos
    this.cargado = true
    })
  }

  borrarJuego(id:number) {
    this.juegosService.deleteJuegoById(id)
    this.cargado = false
    this.obtenerJuegos()
  }

  irAdministrarJuegos () {
    this.router.navigate(['administrarJuegos'])
  }

  modificarJuego(id:number) {
    this.router.navigate(['modificarJuego', id]);
  }

  irCrearJuego () {
    this.router.navigate(['crearJuego'])
  }

}
