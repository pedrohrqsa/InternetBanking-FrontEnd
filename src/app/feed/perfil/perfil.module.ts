import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilComponent } from './perfil.component';

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule
  ],
  exports: [PerfilComponent],
  entryComponents: []
})
export class PerfilModule { }
