import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { LoginModule } from '../login/login.module';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        RouterModule,
        MatIconModule,
        MatButtonModule,
        LoginModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule{}