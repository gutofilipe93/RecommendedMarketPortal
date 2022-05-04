import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { Router, RouterModule } from '@angular/router';

import { CadastraCompraModule } from '../cadastra-compra/cadastra-compra.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MensagemModule,
    RouterModule, 
    CadastraCompraModule
  ],
  exports: [LoginComponent]
})

export class LoginModule { }
