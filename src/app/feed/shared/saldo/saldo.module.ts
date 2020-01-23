import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaldoComponent } from './saldo.component';
import { MatIconModule } from '@angular/material';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [SaldoComponent],
  imports: [
    CommonModule,
    MatIconModule,
    NgxMaskModule.forRoot()
  ],
  exports: [SaldoComponent]
})
export class SaldoModule { }
