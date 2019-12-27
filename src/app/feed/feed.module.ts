import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatIconModule, MatBottomSheetModule, MatMenuModule, MatButtonModule, MatProgressBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { FeedComponent } from './feed.component';
import { SaldoModule } from './shared/saldo/saldo.module';
import { InfosContaModule } from './infos-conta/infos-conta.module';
import { ExtratoModule } from './extrato/extrato.module';
import { DepositoModule } from './deposito/deposito.module';
import { SaqueModule } from './saque/saque.module';
import { TransferenciaModule } from './transferencia/transferencia.module';
import { ConfiguracoesModule } from './configuracoes/configuracoes.module';
import { AlterarSenhaModule } from './configuracoes/alterar-senha/alterar-senha.module';
import { AlterarInfoModule } from './configuracoes/alterar-info/alterar-info.module';
import { InativarContaModule } from './configuracoes/inativar-conta/inativar-conta.module';


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
    ConfiguracoesModule,
    TransferenciaModule,
    MatBottomSheetModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    AlterarSenhaModule,
    AlterarInfoModule,
    InativarContaModule,
    MatProgressBarModule
  ]
})
export class FeedModule { }
