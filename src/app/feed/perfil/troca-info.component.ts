import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
    selector: 'troca-info',
    templateUrl: 'troca-info.component.html',
  })
  export class TrocaInfo {
    constructor(private _bottomSheetRef: MatBottomSheetRef<TrocaInfo>) {}
  
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
    }
  }