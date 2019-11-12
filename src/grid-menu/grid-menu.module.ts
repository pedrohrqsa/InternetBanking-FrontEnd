import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatGridListModule } from '@angular/material';
import { GridMenuComponent } from './grid-menu.component';

@NgModule({
  declarations: [
    GridMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [
    GridMenuComponent
  ]
})
export class GridModule { }