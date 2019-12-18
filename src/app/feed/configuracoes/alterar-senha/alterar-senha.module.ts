import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlterarSenhaComponent } from './alterar-senha.component';
import { MatFormFieldModule, MatCommonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlterarSenhaComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [AlterarSenhaComponent]
})
export class AlterarSenhaModule { }
