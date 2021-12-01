import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logged : boolean

  constructor(private router: Router,private usuarioService : UsuarioService) {
    this.logged = false
    this.usuarioService.isLoggedUser().subscribe(foo => {
      this.logged = foo
    });
   }

  ngOnInit(): void {
  }

  irLogin() {
    this.router.navigate(['login'])
  }

}
