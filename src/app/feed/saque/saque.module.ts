import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaqueComponent } from './saque.component';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatSidenavModule, MatListModule, MatBottomSheet, MatDialogModule, MatBottomSheetContainer, MatBottomSheetModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SaldoModule } from '../shared/saldo/saldo.module';



@NgModule({
  declarations: [SaqueComponent],
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
  exports: [SaqueComponent],
  providers: [MatBottomSheet],
  entryComponents: []
})
export class SaqueModule { }
