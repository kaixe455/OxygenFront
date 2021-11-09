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
import { IntroducirResultadoComponent } from './admin-panel/introducir-resultado/introducir-resultado.component';
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
    IntroducirResultadoComponent,
    CrearUsuarioComponent,
    TopBarComponent,
    NavbarComponent,
    HomeComponent,
    NoticiacardComponent,
    EditarNoticiasComponent,
    CrearEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ImageCropperModule
  ],
  providers: [],
  schemas:[NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
