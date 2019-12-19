import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatCommonModule, MatButtonModule, MatDatepickerModule } from '@angular/material';

import { AlterarInfoComponent } from './alterar-info.component';

@NgModule({
  declarations: [AlterarInfoComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatButtonModule,
    MatDividerModule,
    MatDatepickerModule
  ],
  exports: [AlterarInfoComponent]
})
export class AlterarInfoModule { }
