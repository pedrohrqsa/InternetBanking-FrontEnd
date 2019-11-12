import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { MatFormFieldModule, MatInputModule, MatCommonModule, MatOptionModule, MatSelectModule, MatStepperModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatIconModule } from '@angular/material';

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
    MatIconModule
  ],
  exports: [
    CadastroComponent
  ],
  providers: [],
  bootstrap: []
})
export class CadastroModule { }