import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        MatCardModule,
        HeaderModule,
        RouterModule
    ],
    exports: [HomeComponent]
})

export class HomeModule{}