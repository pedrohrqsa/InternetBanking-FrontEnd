import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositoComponent } from './deposito.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule, MatListModule, MatBottomSheet, MatDialogModule, MatBottomSheetContainer, MatBottomSheetModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaldoModule } from '../shared/saldo/saldo.module';

@NgModule({
  declarations: [DepositoComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    SaldoModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatBottomSheetModule
  ],
  exports: [DepositoComponent],
  providers: [MatBottomSheet],
  entryComponents: []
})
export class DepositoModule { }
