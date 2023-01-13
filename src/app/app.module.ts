import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavegacionComponent } from './componentes/menu-navegacion/menu-navegacion.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { PieDePaginaComponent } from './componentes/pie-de-pagina/pie-de-pagina.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { EnDesarrolloComponent } from './componentes/en-desarrollo/en-desarrollo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacionComponent,
    InformacionComponent,
    ProyectosComponent,
    ContactosComponent,
    PieDePaginaComponent,
    PortfolioComponent,
    HabilidadesComponent,
    EnDesarrolloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
