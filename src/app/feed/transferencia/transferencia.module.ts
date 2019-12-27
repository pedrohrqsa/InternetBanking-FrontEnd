import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferenciaComponent } from './transferencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule, MatListModule, MatBottomSheet, MatDialogModule, MatBottomSheetContainer, MatBottomSheetModule, MatDividerModule } from '@angular/material';
import { SaldoModule } from '../shared/saldo/saldo.module';

@NgModule({
  declarations: [TransferenciaComponent],
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
    MatBottomSheetModule,
    MatDividerModule
  ],
  exports: [TransferenciaComponent],
  providers: [MatBottomSheet],
  entryComponents: []
})
export class TransferenciaModule { }
