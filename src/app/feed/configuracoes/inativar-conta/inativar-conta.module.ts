import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatButtonModule } from '@angular/material';
import { InativarContaComponent } from './inativar-conta.component';

@NgModule({
  declarations: [InativarContaComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatButtonModule
  ],
  exports: [InativarContaComponent]
})
export class InativarContaModule { }
