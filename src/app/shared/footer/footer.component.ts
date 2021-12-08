import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from 'src/app/model/juego';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  juegos : Juego[] = []
  juegos$ !: Observable<Juego[]>

  constructor(private juegosService : JuegoService) {
    this.juegos$ = this.juegosService.getJuegosFooter()
    this.juegos$.subscribe(juegos => this.juegos = juegos)
   }

  ngOnInit(): void {
  }

}
