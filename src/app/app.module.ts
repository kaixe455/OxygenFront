import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { LoginUsuariosComponent } from './login-usuarios/login-usuarios.component';
import { CrearCategoriaComponent } from './admin-panel/crear-categoria/crear-categoria.component';
import { CrearPartidoComponent } from './admin-panel/crear-partido/crear-partido.component';
import { SlidersComponent } from './home/sliders/sliders.component';
import { UltimasNoticiasComponent } from './home/ultimas-noticias/ultimas-noticias.component';
import { ProximoPartidoComponent } from './home/proximo-partido/proximo-partido.component';
import { UltimosResultadosComponent } from './home/ultimos-resultados/ultimos-resultados.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CrearNoticiaComponent } from './admin-panel/crear-noticia/crear-noticia.component';
import { CrearUsuarioComponent } from './admin-panel/crear-usuario/crear-usuario.component';
import { TopBarComponent } from './shared/header/top-bar/top-bar.component';
import { NavbarComponent } from './shared/header/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NoticiacardComponent } from './noticias/noticiacard/noticiacard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { EditarNoticiasComponent } from './admin-panel/editar-noticias/editar-noticias.component';
import { CrearEquipoComponent } from './admin-panel/crear-equipo/crear-equipo.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CrearJuegoComponent } from './admin-panel/crear-juego/crear-juego.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdministrarPartidosComponent } from './admin-panel/administrar-partidos/administrar-partidos.component';
import { InformarResultadoComponent } from './admin-panel/administrar-partidos/informar-resultado/informar-resultado.component';
import { ModificarNoticiaComponent } from './admin-panel/editar-noticias/modificar-noticia/modificar-noticia.component';
import { AdministrarCategoriasComponent } from './admin-panel/administrar-categorias/administrar-categorias.component';
import { ModificarCategoriasComponent } from './admin-panel/administrar-categorias/modificar-categorias/modificar-categorias.component';
import { AdministrarSlidersComponent } from './admin-panel/administrar-sliders/administrar-sliders.component';
import { ModificarSliderComponent } from './admin-panel/administrar-sliders/modificar-slider/modificar-slider.component';
import { AdministrarEquiposComponent } from './admin-panel/administrar-equipos/administrar-equipos.component';
import { ModificarEquipoComponent } from './admin-panel/administrar-equipos/modificar-equipo/modificar-equipo.component';
import { CrearJugadorComponent } from './admin-panel/crear-jugador/crear-jugador.component';
import { CrearPatrocinadorComponent } from './admin-panel/crear-patrocinador/crear-patrocinador.component';
import { AdministrarPatrocinadoresComponent } from './admin-panel/administrar-patrocinadores/administrar-patrocinadores.component';
import { ModificarPatrocinadorComponent } from './admin-panel/administrar-patrocinadores/modificar-patrocinador/modificar-patrocinador.component';
import { AdministrarJugadoresComponent } from './admin-panel/administrar-jugadores/administrar-jugadores.component';
import { ModificarJugadorComponent } from './admin-panel/administrar-jugadores/modificar-jugador/modificar-jugador.component';
import { AdministrarJuegosComponent } from './admin-panel/administrar-juegos/administrar-juegos.component';
import { ModificarJuegoComponent } from './admin-panel/administrar-juegos/modificar-juego/modificar-juego.component';
import { VisualizarNoticiaComponent } from './noticias/visualizar-noticia/visualizar-noticia.component';
import { CarrouselPatrocinadoresComponent } from './home/carrousel-patrocinadores/carrousel-patrocinadores.component';
import { ClubComponent } from './club/club.component';
import { EquiposComponent } from './equipos/equipos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistroUsuariosComponent,
    LoginUsuariosComponent,
    CrearCategoriaComponent,
    CrearPartidoComponent,
    SlidersComponent,
    UltimasNoticiasComponent,
    ProximoPartidoComponent,
    UltimosResultadosComponent,
    NoticiasComponent,
    CrearNoticiaComponent,
    CrearUsuarioComponent,
    TopBarComponent,
    NavbarComponent,
    HomeComponent,
    NoticiacardComponent,
    EditarNoticiasComponent,
    CrearEquipoComponent,
    CrearJuegoComponent,
    AdministrarPartidosComponent,
    InformarResultadoComponent,
    ModificarNoticiaComponent,
    AdministrarCategoriasComponent,
    ModificarCategoriasComponent,
    AdministrarSlidersComponent,
    ModificarSliderComponent,
    AdministrarEquiposComponent,
    ModificarEquipoComponent,
    CrearJugadorComponent,
    CrearPatrocinadorComponent,
    AdministrarPatrocinadoresComponent,
    ModificarPatrocinadorComponent,
    AdministrarJugadoresComponent,
    ModificarJugadorComponent,
    AdministrarJuegosComponent,
    ModificarJuegoComponent,
    VisualizarNoticiaComponent,
    CarrouselPatrocinadoresComponent,
    ClubComponent,
    EquiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ImageCropperModule,
    NgbModule,
    NgSelectModule,
  ],
  providers: [],
  schemas:[NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
