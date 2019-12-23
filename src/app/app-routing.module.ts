import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { LoginGuard } from './core/not-logged.guard';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './login/login.component';
import { AtivarContaComponent } from './ativar-conta/ativar-conta.component';

const routes: Routes = [

  { path: '', component: HomeComponent, /*canActivate: [AuthGuard]*/ },
  { path: 'cadastro', component: CadastroComponent, /*canActivate: [AuthGuard]*/ },
  { path: 'feed/:cpf', component: FeedComponent, /*canActivate: [AuthGuard]*/ },
  { path: 'ativar', component: AtivarContaComponent, /*canActivate: [AuthGuard]*/ },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
