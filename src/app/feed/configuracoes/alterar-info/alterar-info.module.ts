import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatCommonModule, MatButtonModule, MatDatepickerModule } from '@angular/material';

import { AlterarInfoComponent } from './alterar-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [AlterarInfoComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatButtonModule,
    MatDividerModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [AlterarInfoComponent]
})
export class AlterarInfoModule { }
