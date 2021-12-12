import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Partido } from 'src/app/model/partido';
import { PartidoService } from 'src/app/services/partido.service';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-informar-resultado',
  templateUrl: './informar-resultado.component.html',
  styleUrls: ['./informar-resultado.component.css']
})
export class InformarResultadoComponent implements OnInit {

  id: number;
  partido : Partido = new Partido()
  partido$! : Observable<Partido>
  errorResultadoLocal : boolean = false
  errorResultadoVisitante : boolean = false
  resultadoValido : boolean = true

  constructor(private router: Router,private route: ActivatedRoute, private partidoService : PartidoService,private zone: NgZone, private notificacionService : ToastrService, private validator : ValidatorService) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.obtenerPartido(this.id)

  }

  obtenerPartido(id : number) {
    this.partido$ = this.partidoService.getPartidoById(id)
    this.partido$.subscribe(partido => { this.partido = partido
                                          })
  }

  actualizar() {
    this.errorResultadoVisitante = false
    this.errorResultadoLocal = false
    this.resultadoValido = true
    this.validarCampos()
      if(this.resultadoValido) {
      this.partidoService.updatePartido(this.partido,this.partido.id).subscribe(data => {
        if(data) {
          this.notificacionService.success("Resultado actualizado")
          this.irPartidos()
        }
      })
    }else {
      this.notificacionService.error("Hay errores en el formulario")
    }
  }

  irPartidos() {
    this.router.navigate(['administrarPartidos'])
  }

  validarCampos() {

    // si no esta vacio y no es un numero error
    if(!this.validator.esCampoVacio(this.partido.puntuacionLocal) && !this.validator.esNumero(this.partido.puntuacionLocal)) {
      this.errorResultadoLocal = true
    }
     // si no esta vacio y no es un numero error
     if(!this.validator.esCampoVacio(this.partido.puntuacionVisitante) && !this.validator.esNumero(this.partido.puntuacionVisitante)) {
      this.errorResultadoVisitante = true
    }
    // si hay alguno error resultado no valido
    if(this.errorResultadoLocal || this.errorResultadoVisitante) {
      this.resultadoValido = false
    }

  }

}
