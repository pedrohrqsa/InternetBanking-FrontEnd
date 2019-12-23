import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatCommonModule, MatButtonModule, MatDatepickerModule } from '@angular/material';

import { AlterarInfoComponent } from './alterar-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlterarInfoComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatButtonModule,
    MatDividerModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AlterarInfoComponent]
})
export class AlterarInfoModule { }
