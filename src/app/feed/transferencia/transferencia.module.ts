import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferenciaComponent } from './transferencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule, MatListModule, MatBottomSheet, MatDialogModule, MatBottomSheetContainer, MatBottomSheetModule, MatDividerModule } from '@angular/material';
import { SaldoModule } from '../shared/saldo/saldo.module';
import { NgxCurrencyModule } from 'ngx-currency';

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
    MatDividerModule,
    NgxCurrencyModule
  ],
  exports: [TransferenciaComponent],
  providers: [MatBottomSheet],
  entryComponents: []
})
export class TransferenciaModule { }
