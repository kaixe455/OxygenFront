import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from 'src/app/model/juego';
import { Partido } from 'src/app/model/partido';
import { EquipoService } from 'src/app/services/equipo.service';
import { JuegoService } from 'src/app/services/juego.service';
import {NgbDateStruct,NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Equipo } from 'src/app/model/equipo';
import { PartidoService } from 'src/app/services/partido.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-crear-partido',
  templateUrl: './crear-partido.component.html',
  styleUrls: ['./crear-partido.component.css']
})
export class CrearPartidoComponent implements OnInit {

  partido : Partido = new Partido()
  juegos : Juego[] = []
  juegos$!: Observable<Juego[]>;
  equipos : Equipo[] = []
  equipos$!: Observable<Equipo[]>;
  fechaDatePicker !: NgbDateStruct

  @ViewChild('NgbdDatepicker') d !: NgbDateStruct;

  constructor(private juegoService : JuegoService, private equipoService : EquipoService, private partidoService : PartidoService,private router: Router) { }

  ngOnInit(): void {
    this.juegos$ = this.juegoService.getJuegosAll()
    this.juegos$.subscribe(juegos => {
      this.juegos = juegos
    })
    this.equipos$ = this.equipoService.getEquiposAll()
    this.equipos$.subscribe(equipos => {
      this.equipos = equipos
    })
  }

  crearPartido() {
    console.log(this.partido)
    this.partido.fx_inicio_fx = new Date(this.fechaDatePicker.year, this.fechaDatePicker.month - 1, this.fechaDatePicker.day);
    this.partidoService.createPartido(this.partido).subscribe(data => {
      this.partido = new Partido()
      this.irAdministrarPartidos()

    })
  }

  irCrearPartido () {
    this.router.navigate(['crearPartido'])
  }

  irAdministrarPartidos () {
    this.router.navigate(['administrarPartidos'])
  }

}
