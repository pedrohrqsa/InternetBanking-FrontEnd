import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatCommonModule, MatInputModule } from '@angular/material';

import { ConfiguracoesComponent } from './configuracoes.component';
import { SaldoModule } from '../shared/saldo/saldo.module';
import { TrocaSenha } from './troca-senha.component';
import { TrocaInfo } from './troca-info.component';
import { FechaConta } from './fecha-conta.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConfiguracoesComponent, TrocaSenha, TrocaInfo, FechaConta],
  imports: [
    CommonModule,
    SaldoModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [ConfiguracoesComponent, TrocaSenha, TrocaInfo, FechaConta],
  entryComponents: [TrocaSenha, TrocaInfo, FechaConta]
})
export class ConfiguracoesModule { }
