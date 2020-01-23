import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule,
          MatSidenavModule, MatListModule, MatBottomSheet, MatDialogModule,
          MatBottomSheetModule, 
          MatDividerModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DepositoComponent } from './deposito.component';
import { SaldoModule } from '../shared/saldo/saldo.module';
import { NgxMaskModule } from 'ngx-mask';

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
    MatBottomSheetModule,
    MatDividerModule,
    NgxMaskModule.forRoot()
  ],
  exports: [DepositoComponent],
  providers: [MatBottomSheet],
  entryComponents: []
})
export class DepositoModule { }
