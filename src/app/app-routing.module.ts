import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearNoticiaComponent } from './admin-panel/crear-noticia/crear-noticia.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'crearNoticias', component: CrearNoticiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
