import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarCategoriasComponent } from './admin-panel/administrar-categorias/administrar-categorias.component';
import { ModificarCategoriasComponent } from './admin-panel/administrar-categorias/modificar-categorias/modificar-categorias.component';
import { AdministrarEquiposComponent } from './admin-panel/administrar-equipos/administrar-equipos.component';
import { ModificarEquipoComponent } from './admin-panel/administrar-equipos/modificar-equipo/modificar-equipo.component';
import { AdministrarJuegosComponent } from './admin-panel/administrar-juegos/administrar-juegos.component';
import { ModificarJuegoComponent } from './admin-panel/administrar-juegos/modificar-juego/modificar-juego.component';
import { AdministrarJugadoresComponent } from './admin-panel/administrar-jugadores/administrar-jugadores.component';
import { ModificarJugadorComponent } from './admin-panel/administrar-jugadores/modificar-jugador/modificar-jugador.component';
import { AdministrarPartidosComponent } from './admin-panel/administrar-partidos/administrar-partidos.component';
import { InformarResultadoComponent } from './admin-panel/administrar-partidos/informar-resultado/informar-resultado.component';
import { AdministrarPatrocinadoresComponent } from './admin-panel/administrar-patrocinadores/administrar-patrocinadores.component';
import { ModificarPatrocinadorComponent } from './admin-panel/administrar-patrocinadores/modificar-patrocinador/modificar-patrocinador.component';
import { AdministrarSlidersComponent } from './admin-panel/administrar-sliders/administrar-sliders.component';
import { ModificarSliderComponent } from './admin-panel/administrar-sliders/modificar-slider/modificar-slider.component';
import { CrearCategoriaComponent } from './admin-panel/crear-categoria/crear-categoria.component';
import { CrearEquipoComponent } from './admin-panel/crear-equipo/crear-equipo.component';
import { CrearJuegoComponent } from './admin-panel/crear-juego/crear-juego.component';
import { CrearJugadorComponent } from './admin-panel/crear-jugador/crear-jugador.component';
import { CrearNoticiaComponent } from './admin-panel/crear-noticia/crear-noticia.component';
import { CrearPartidoComponent } from './admin-panel/crear-partido/crear-partido.component';
import { CrearPatrocinadorComponent } from './admin-panel/crear-patrocinador/crear-patrocinador.component';
import { EditarNoticiasComponent } from './admin-panel/editar-noticias/editar-noticias.component';
import { ModificarNoticiaComponent } from './admin-panel/editar-noticias/modificar-noticia/modificar-noticia.component';
import { HomeComponent } from './home/home.component';
import { LoginUsuariosComponent } from './login-usuarios/login-usuarios.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'crearNoticias', component: CrearNoticiaComponent },
  { path: 'editarNoticias', component: EditarNoticiasComponent },
  { path: 'crearEquipo', component: CrearEquipoComponent },
  { path: 'crearJuego', component: CrearJuegoComponent },
  { path: 'crearPartido', component: CrearPartidoComponent },
  { path: 'administrarPartidos', component: AdministrarPartidosComponent },
  { path: 'introducirResultado/:id', component: InformarResultadoComponent },
  { path: 'crearCategoria', component: CrearCategoriaComponent },
  { path: 'modificarNoticia/:id', component: ModificarNoticiaComponent },
  { path: 'administrarCategorias', component: AdministrarCategoriasComponent },
  { path: 'modificarCategoria/:id', component: ModificarCategoriasComponent },
  { path: 'administrarSliders', component: AdministrarSlidersComponent },
  { path: 'modificarSlider/:id', component: ModificarSliderComponent },
  { path: 'administrarEquipos', component: AdministrarEquiposComponent },
  { path: 'modificarEquipo/:id', component: ModificarEquipoComponent },
  { path: 'crearPatrocinador', component: CrearPatrocinadorComponent },
  { path: 'modificarPatrocinador/:id', component: ModificarPatrocinadorComponent },
  { path: 'administrarPatrocinadores', component: AdministrarPatrocinadoresComponent },
  { path: 'crearJugador', component: CrearJugadorComponent },
  { path: 'modificarJugador/:id', component: ModificarJugadorComponent },
  { path: 'administrarJugadores', component: AdministrarJugadoresComponent },
  { path: 'login', component: LoginUsuariosComponent },
  { path: 'modificarJuego/:id', component: ModificarJuegoComponent },
  { path: 'administrarJuegos', component: AdministrarJuegosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
