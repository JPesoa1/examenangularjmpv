import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CubosComponent } from './components/cubos/cubos.component';
import { MenuComponent } from './components/menu/menu.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TiendaService } from './services/tienda/tienda.service';
import { MarcacuboComponent } from './components/marcacubo/marcacubo.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
@NgModule({
  declarations: [
    AppComponent,
    CubosComponent,
    MenuComponent,
    MarcacuboComponent,
    DetallescuboComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TiendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
