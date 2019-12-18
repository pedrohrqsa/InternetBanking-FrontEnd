import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatCommonModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { ConfiguracoesComponent } from './configuracoes.component';
import { SaldoModule } from '../shared/saldo/saldo.module';
import { AlterarSenhaModule } from './alterar-senha/alterar-senha.module';
import { AlterarInfoModule } from './alterar-info/alterar-info.module';
import { InativarContaModule } from './inativar-conta/inativar-conta.module';

@NgModule({
  declarations: [ConfiguracoesComponent],
  imports: [
    CommonModule,
    SaldoModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AlterarSenhaModule,
    AlterarInfoModule,
    InativarContaModule

  ],
  exports: [ConfiguracoesComponent],
  entryComponents: []
})
export class ConfiguracoesModule { }
