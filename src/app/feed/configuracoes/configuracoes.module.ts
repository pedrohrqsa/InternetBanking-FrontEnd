import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatCommonModule, MatInputModule } from '@angular/material';

import { ConfiguracoesComponent } from './configuracoes.component';
import { SaldoModule } from '../shared/saldo/saldo.module';
import { TrocaSenha } from './troca-senha.component';
import { TrocaInfo } from './troca-info.component';
import { FechaConta } from './fecha-conta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedComponent } from '../feed.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'feed/:cpf', component: FeedComponent, /*canActivate: [AuthGuard]*/ },
];

@NgModule({
  declarations: [ConfiguracoesComponent, TrocaSenha, TrocaInfo, FechaConta],
  imports: [
    CommonModule,
    SaldoModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ConfiguracoesComponent, TrocaSenha, TrocaInfo, FechaConta, RouterModule],
  entryComponents: [TrocaSenha, TrocaInfo, FechaConta]
})
export class ConfiguracoesModule { }
