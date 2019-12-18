import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatCommonModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { ConfiguracoesComponent } from './configuracoes.component';
import { SaldoModule } from '../shared/saldo/saldo.module';
import { AlterarSenhaModule } from './alterar-senha/alterar-senha.module';

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
    AlterarSenhaModule
  ],
  exports: [ConfiguracoesComponent],
  entryComponents: []
})
export class ConfiguracoesModule { }
