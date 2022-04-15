import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraCompraComponent } from './cadastra-compra.component';



@NgModule({
  declarations: [
    CadastraCompraComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CadastraCompraComponent]
})
export class CadastraCompraModule { }
