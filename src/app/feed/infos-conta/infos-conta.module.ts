import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfosContaComponent } from './infos-conta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { SaldoModule } from '../shared/saldo/saldo.module';



@NgModule({
  declarations: [InfosContaComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    SaldoModule,
    MatDividerModule
  ],
  exports: [InfosContaComponent]
})
export class InfosContaModule { }
