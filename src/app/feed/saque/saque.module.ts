import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaqueComponent, BottomSheetOverviewExampleSheet } from './saque.component';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatSidenavModule, MatListModule, MatBottomSheet, MatDialogModule, MatBottomSheetContainer, MatBottomSheetModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SaldoModule } from '../shared/saldo/saldo.module';



@NgModule({
  declarations: [SaqueComponent, BottomSheetOverviewExampleSheet],
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
  entryComponents: [BottomSheetOverviewExampleSheet]
})
export class SaqueModule { }
