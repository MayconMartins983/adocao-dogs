import { DogsComponent } from './app/componentes/dogs/dogs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './app/componentes/inicio/inicio.component';
import { SobreComponent } from './app/componentes/sobre/sobre.component';
import { LoginComponent } from './app/componentes/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'dogs',
    component: DogsComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
