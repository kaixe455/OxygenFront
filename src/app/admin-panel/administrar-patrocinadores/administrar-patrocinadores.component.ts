import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patrocinador } from 'src/app/model/patrocinador';
import { PatrocinadorService } from 'src/app/services/patrocinador.service';

@Component({
  selector: 'app-administrar-patrocinadores',
  templateUrl: './administrar-patrocinadores.component.html',
  styleUrls: ['./administrar-patrocinadores.component.css']
})
export class AdministrarPatrocinadoresComponent implements OnInit {

  patrocinadores : Patrocinador[] = []
  patrocinadores$ !: Observable<Patrocinador[]>

  constructor(private patrocinadorService : PatrocinadorService,private router: Router) { }

  ngOnInit(): void {
    this.obtenerPatrocinadores()
  }

  obtenerPatrocinadores() {
    this.patrocinadores$ = this.patrocinadorService.getPatrocinadoresAll()
    this.patrocinadores$.subscribe(patrocinadores => this.patrocinadores = patrocinadores)
  }

  borrarPatrocinador(id:number) {
    this.patrocinadorService.deletePatrocinadorById(id)
    this.obtenerPatrocinadores()
    this.irGestionarPatrocinadores();
  }

  irGestionarPatrocinadores () {
    this.router.navigate(['administrarPatrocinadores'])
  }

  modificarPatrocinador(id:number) {
    this.router.navigate(['modificarPatrocinador', id])
  }

}
