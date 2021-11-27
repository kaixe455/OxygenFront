import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Partido } from 'src/app/model/partido';
import { PartidoService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-administrar-partidos',
  templateUrl: './administrar-partidos.component.html',
  styleUrls: ['./administrar-partidos.component.css']
})
export class AdministrarPartidosComponent implements OnInit {

  partidos: Partido[] = []
  partidos$!: Observable<Partido[]>;

  constructor(private partidosService : PartidoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerPartidos()
  }

  obtenerPartidos() {
    this.partidos$ = this.partidosService.getPartidosAdmin()
    this.partidos$.subscribe(partidos => this.partidos = partidos)
  }

  borrarPartido(id:number) {
    this.partidosService.deletePartidoById(id);
    this.obtenerPartidos();
    this.irEditarPartidos();
  }

  irEditarPartidos () {
    this.router.navigate(['administrarPartidos'])
  }

  introducirResultado(id:number) {
    this.router.navigate(['introducirResultado', id])
  }

  eliminarResultado(id:number) {
    console.log(id)
    this.partidosService.eliminarResultado(id).subscribe( reiniciado => {this.obtenerPartidos()})

  }

}