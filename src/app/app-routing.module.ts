import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEquipoComponent } from './admin-panel/crear-equipo/crear-equipo.component';
import { CrearNoticiaComponent } from './admin-panel/crear-noticia/crear-noticia.component';
import { EditarNoticiasComponent } from './admin-panel/editar-noticias/editar-noticias.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'crearNoticias', component: CrearNoticiaComponent },
  { path: 'editarNoticias', component: EditarNoticiasComponent },
  { path: 'crearEquipo', component: CrearEquipoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
