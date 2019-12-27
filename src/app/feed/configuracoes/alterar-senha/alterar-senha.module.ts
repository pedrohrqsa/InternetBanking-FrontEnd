import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatCommonModule, MatInputModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AlterarSenhaComponent } from './alterar-senha.component';

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
