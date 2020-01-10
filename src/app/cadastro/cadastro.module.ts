import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatCommonModule, MatOptionModule, MatSelectModule, MatStepperModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatIconModule } from '@angular/material';

import { CadastroComponent } from './cadastro.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HeaderModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCommonModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule, 
    HttpClientModule
  ],
  exports: [
    CadastroComponent
  ],
  providers: [],
  bootstrap: []
})
export class CadastroModule { }