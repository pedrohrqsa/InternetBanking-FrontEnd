import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatButtonModule, MatDividerModule, MatFormFieldModule } from '@angular/material';
import { InativarContaComponent } from './inativar-conta.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InativarContaComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [InativarContaComponent]
})
export class InativarContaModule { }
