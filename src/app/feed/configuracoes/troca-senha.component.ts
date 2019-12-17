import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { FormGroup, FormGroupDirective, FormControl, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}

@Component({
    selector: 'troca-senha',
    templateUrl: 'troca-senha.component.html',
  })
  export class TrocaSenha implements OnInit {

    trocaSenhaFormGroup: FormGroup;
    matcher = new MyErrorStateMatcher();

    constructor(
      private _bottomSheetRef: MatBottomSheetRef<TrocaSenha>,
      private _formBuilder: FormBuilder) {}
    
    ngOnInit() {
      this.trocaSenhaFormGroup = this._formBuilder.group({
        novaSenha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
        confirmacaoNovaSenha: ['', [Validators.minLength(8), Validators.maxLength(15)]]
      },
        { validator: this.checkPasswords }
      );
    }
  
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
    }

    checkPasswords(group: FormGroup) {
      let pass = group.controls.novaSenha.value;
      let confirmPass = group.controls.confirmacaoNovaSenha.value;
      return pass === confirmPass ? null : { notSame: true }
    }
  }