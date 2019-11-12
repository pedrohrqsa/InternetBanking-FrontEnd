import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfosContaComponent } from './infos-conta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
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
    SaldoModule
  ],
  exports: [InfosContaComponent]
})
export class InfosContaModule { }
