import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { BuscarFiltrosComponent } from './buscar-filtros/buscar-filtros.component';
import { CasasestadosComponent } from './casasestados/casasestados.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'buscarfiltros', component:  BuscarFiltrosComponent},
  { path: 'casasestados', component: CasasestadosComponent},
  { path: '**', component:  InicioComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
