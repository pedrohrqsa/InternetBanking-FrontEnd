import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material';

import { AlterarInfoComponent } from './alterar-info.component';

@NgModule({
  declarations: [AlterarInfoComponent],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [AlterarInfoComponent]
})
export class AlterarInfoModule { }
