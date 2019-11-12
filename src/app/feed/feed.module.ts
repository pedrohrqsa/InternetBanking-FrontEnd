import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatIconModule, MatBottomSheetModule } from '@angular/material';

import { FeedComponent } from './feed.component';
import { SaldoModule } from './shared/saldo/saldo.module';
import { InfosContaModule } from './infos-conta/infos-conta.module';
import { ExtratoModule } from './extrato/extrato.module';
import { DepositoModule } from './deposito/deposito.module';
import { SaqueModule } from './saque/saque.module';
import { TransferenciaModule } from './transferencia/transferencia.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    SaldoModule,
    InfosContaModule,
    ExtratoModule,
    DepositoModule,
    SaqueModule,
    TransferenciaModule,
    MatBottomSheetModule,
    RouterModule
  ]
})
export class FeedModule { }
