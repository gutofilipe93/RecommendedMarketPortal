import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraCompraComponent } from './cadastra-compra/cadastra-compra/cadastra-compra.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',        
    component: LoginComponent
  },
  {
    path: 'cadastra-compra',            
    component: CadastraCompraComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
