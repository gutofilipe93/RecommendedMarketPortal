import { MenuLateralModule } from 'src/app/componentes/menu-lateral/menu-lateral.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraCompraComponent } from './cadastra-compra.component';




@NgModule({
  declarations: [
    CadastraCompraComponent
  ],
  imports: [
    CommonModule,
    MenuLateralModule
  ],
  exports:[CadastraCompraComponent]
})
export class CadastraCompraModule { }
