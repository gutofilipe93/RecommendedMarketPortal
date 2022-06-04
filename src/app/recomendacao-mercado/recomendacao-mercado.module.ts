import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecomendacaoMercadoComponent } from './recomendacao-mercado.component';
import { MenuLateralModule } from '../componentes/menu-lateral/menu-lateral.module';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { MatSelectFilterModule } from 'mat-select-filter';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [RecomendacaoMercadoComponent],
  imports: [
    CommonModule,
    MenuLateralModule,
    FormsModule,    
    MatSelectModule,
    MatFormFieldModule,
    MensagemModule,
    MatSelectFilterModule,
    MatProgressSpinnerModule
  ],
  exports:[RecomendacaoMercadoComponent]  
})
export class RecomendacaoMercadoModule { }
