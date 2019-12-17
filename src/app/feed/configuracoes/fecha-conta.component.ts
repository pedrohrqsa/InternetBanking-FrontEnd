import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
    selector: 'fecha-conta',
    templateUrl: 'fecha-conta.component.html',
  })
  export class FechaConta {
    constructor(private _bottomSheetRef: MatBottomSheetRef<FechaConta>) {}
  
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
    }
  }