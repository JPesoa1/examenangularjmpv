import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CubosComponent } from './components/cubos/cubos.component';
import { MarcacuboComponent } from './components/marcacubo/marcacubo.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"registro",component:RegistroComponent},
  {path:"home",component:CubosComponent},
  {path:"marcacubo/:marca",component:MarcacuboComponent},
  {path:"detalles/:id",component:DetallescuboComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"compras",component:ComprasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
