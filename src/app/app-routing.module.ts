import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { VistaLogeadoComponent } from './componentes/vista-logeado/vista-logeado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path : '', redirectTo: 'principal', pathMatch:'full'},
  {path: 'principal', component: PrincipalComponent},
  {path: 'visitante',component:VistaLogeadoComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
