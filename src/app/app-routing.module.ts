import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraCompraComponent } from './cadastra-compra/cadastra-compra.component';
import { AuthGuard } from './guard/auth-guard.service';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',        
    component: LoginComponent
  },
  {
    path: 'cadastra-compra',            
    component: CadastraCompraComponent,
    canActivate: [AuthGuard]
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
