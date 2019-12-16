import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatCommonModule, MatInputModule } from '@angular/material';

import { PerfilComponent } from './perfil.component';
import { SaldoModule } from '../shared/saldo/saldo.module';
import { TrocaSenha } from './troca-senha.component';
import { TrocaInfo } from './troca-info.component';
import { FechaConta } from './fecha-conta.component';

@NgModule({
  declarations: [PerfilComponent, TrocaSenha, TrocaInfo, FechaConta],
  imports: [
    CommonModule,
    SaldoModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [PerfilComponent, TrocaSenha, TrocaInfo, FechaConta],
  entryComponents: [TrocaSenha, TrocaInfo, FechaConta]
})
export class PerfilModule { }
