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
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from 'src/app/services/validator.service';

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
  errorJuego : boolean = false
  errorCompeticion : boolean = false
  errorEquipoLocal : boolean = false
  errorEquipoVisitante : boolean = false
  errorFechaInicio : boolean = false
  partidoValido : boolean = true

  @ViewChild('NgbdDatepicker') d !: NgbDateStruct;

  constructor(private juegoService : JuegoService, private equipoService : EquipoService, private partidoService : PartidoService,private router: Router, private notificacionService : ToastrService, private validator : ValidatorService) { }

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
    if(this.fechaDatePicker) {
      this.partido.fx_inicio_fx = new Date(this.fechaDatePicker.year, this.fechaDatePicker.month - 1, this.fechaDatePicker.day);
    }
    this.errorJuego = false
    this.errorCompeticion = false
    this.errorEquipoLocal = false
    this.errorEquipoVisitante = false
    this.errorFechaInicio = false
    this.partidoValido = true
    this.validarCampos()
    if(this.partidoValido) {
      this.partidoService.createPartido(this.partido).subscribe(data => {
        if(data) {
          this.notificacionService.success("Partido publicado correctamente")
          this.partido = new Partido()
          this.irAdministrarPartidos()
        }

      })
    } else {
      this.notificacionService.error("Hay errores en el formulario")
    }
  }

  irCrearPartido () {
    this.router.navigate(['crearPartido'])
  }

  irAdministrarPartidos () {
    this.router.navigate(['administrarPartidos'])
  }

  validarCampos() {

    // valido que el campo juego id no sea = 0 que es sin seleccionar
    if(this.partido.juego.id == 0) {
      this.errorJuego = true
    }
    // valido que el campo competicion no este vacio
    if(this.validator.esCampoVacio(this.partido.competicion)) {
      this.errorCompeticion = true
    }
     // valido que el campo id equipo local no sea = 0 que es sin seleccionar
     if(this.partido.equipoLocal.id == 0) {
      this.errorEquipoLocal = true
    }

     // valido que el campo  id equipo visitante no sea = 0 que es sin seleccionar
     if(this.partido.equipoVisitante.id == 0) {
      this.errorEquipoVisitante = true
    }
    // valido que la fecha tenga formato fecha
    if(!this.validator.esFecha(this.fechaDatePicker)) {
      this.errorFechaInicio = true
    }
    // si hay algún error partido no valido
    if(this.errorCompeticion || this.errorEquipoLocal || this.errorEquipoVisitante || this.errorFechaInicio || this.errorJuego) {
      this.partidoValido = false
    }

  }

}
