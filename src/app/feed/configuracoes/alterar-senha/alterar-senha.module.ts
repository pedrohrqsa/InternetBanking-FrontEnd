import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatInputModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AlterarSenhaComponent } from './alterar-senha.component';

@NgModule({
  declarations: [AlterarSenhaComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [AlterarSenhaComponent]
})
export class AlterarSenhaModule { }
