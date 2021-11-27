import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Partido } from 'src/app/model/partido';
import { PartidoService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-informar-resultado',
  templateUrl: './informar-resultado.component.html',
  styleUrls: ['./informar-resultado.component.css']
})
export class InformarResultadoComponent implements OnInit {

  id: number;
  partido : Partido = new Partido()
  partido$! : Observable<Partido>

  constructor(private router: Router,private route: ActivatedRoute, private partidoService : PartidoService,private zone: NgZone) {
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
    this.partidoService.updatePartido(this.partido,this.partido.id).subscribe(data => {
      this.irPartido(this.partido.id)
    })
  }

  irPartido(id : number) {
    this.router.navigate(['administrarPartidos'])
  }

}
