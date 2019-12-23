import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { InativarContaComponent } from './inativar-conta.component';

@NgModule({
  declarations: [InativarContaComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [InativarContaComponent]
})
export class InativarContaModule { }
