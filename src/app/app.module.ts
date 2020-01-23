import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatDatepickerModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from 'src/grid-menu/grid-menu.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { ErrosModule } from './erros/erros.module';
import { LoginModule } from './login/login.module';
import { FeedModule } from './feed/feed.module';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { InfoContaService } from './feed/infos-conta/Infos-conta.service';
import { InfosContaModule } from './feed/infos-conta/infos-conta.module';
import { AtivarContaComponent } from './ativar-conta/ativar-conta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    AtivarContaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    GridModule,
    CadastroModule,
    RouterModule,
    ErrosModule,
    LoginModule,
    HttpClientModule,
    FeedModule,
    HomeModule,
    HeaderModule,
    InfosContaModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgxMaskModule.forRoot()
  ],
  providers: [InfoContaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
