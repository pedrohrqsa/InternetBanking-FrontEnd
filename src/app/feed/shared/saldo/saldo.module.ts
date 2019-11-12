import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaldoComponent } from './saldo.component';
import { MatIconModule } from '@angular/material';



@NgModule({
  declarations: [SaldoComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [SaldoComponent]
})
export class SaldoModule { }
