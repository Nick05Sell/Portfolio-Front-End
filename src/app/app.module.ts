import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavegacionComponent } from './componentes/menu-navegacion/menu-navegacion.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacionComponent,
    InformacionComponent,
    ProyectosComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
