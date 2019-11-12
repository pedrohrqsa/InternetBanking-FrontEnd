import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from 'src/grid-menu/grid-menu.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { ErrosModule } from './erros/erros.module';
import { LoginModule } from './login/login.module';
import { FeedModule } from './feed/feed.module';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent
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
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
