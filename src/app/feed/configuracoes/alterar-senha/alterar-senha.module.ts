import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlterarSenhaComponent } from './alterar-senha.component';
import { MatFormFieldModule, MatCommonModule, MatInputModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlterarSenhaComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [AlterarSenhaComponent]
})
export class AlterarSenhaModule { }
