import { MenuLateralModule } from 'src/app/componentes/menu-lateral/menu-lateral.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraCompraComponent } from './cadastra-compra.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from 'src/app/componentes/mensagem/mensagem.module';
import { AutoFocusDirective } from '../directives/auto-focus.directive';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectFilterModule } from 'mat-select-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 



@NgModule({
  declarations: [
    CadastraCompraComponent
  ],
  imports: [
    CommonModule,
    MenuLateralModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MensagemModule,
    MatSelectFilterModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot()    
  ],
  exports:[CadastraCompraComponent]
})
export class CadastraCompraModule { }
