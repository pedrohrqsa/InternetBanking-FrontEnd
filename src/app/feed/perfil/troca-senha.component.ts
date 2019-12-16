import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
    selector: 'troca-senha',
    templateUrl: 'troca-senha.component.html',
  })
  export class TrocaSenha {
    constructor(private _bottomSheetRef: MatBottomSheetRef<TrocaSenha>) {}
  
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
    }
  }