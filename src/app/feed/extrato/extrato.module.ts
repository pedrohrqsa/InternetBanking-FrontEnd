import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatTabsModule, MatTableModule, MatPaginatorModule, MatButtonModule } from '@angular/material';
import { ExtratoComponent } from './extrato.component';
import { InfosContaModule } from '../infos-conta/infos-conta.module';


@NgModule({
    declarations: [ExtratoComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        InfosContaModule
    ],
    exports: [ExtratoComponent]
})

export class ExtratoModule{}