import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Equipo } from 'src/app/model/equipo';
import { EquipoService } from 'src/app/services/equipo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-administrar-equipos',
  templateUrl: './administrar-equipos.component.html',
  styleUrls: ['./administrar-equipos.component.css']
})
export class AdministrarEquiposComponent implements OnInit {

  equipos: Equipo[] = []
  equipos$!: Observable<Equipo[]>;

  constructor(private equiposService : EquipoService, private router: Router, private notificacionService : ToastrService) { }

  ngOnInit(): void {
    this.obtenerEquipos()
  }

  obtenerEquipos() {
    this.equipos$ = this.equiposService.getEquiposAll()
    this.equipos$.subscribe(equipos => this.equipos = equipos)
  }

  borrarEquipo(id:number) {
    this.equiposService.deleteEquipoById(id)
    this.notificacionService.success("Equipo eliminado correctamente")
    setTimeout(()=>{
      this.ngOnInit()
    }, 100)
  }

  irGestionarEquipos () {
    this.router.navigate(['administrarEquipos'])
  }

  modificarEquipo(id:number) {
    this.router.navigate(['modificarEquipo', id])
  }

  irCrearEquipo () {
    this.router.navigate(['crearEquipo'])
  }

}
