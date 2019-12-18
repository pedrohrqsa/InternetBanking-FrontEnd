import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  trocaSenhaFormGroup: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.trocaSenhaFormGroup = this._formBuilder.group({
      novaSenha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      confirmacaoNovaSenha: ['', [Validators.minLength(8), Validators.maxLength(15)]]
    },
      { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls.novaSenha.value;
    let confirmPass = group.controls.confirmacaoNovaSenha.value;
    return pass === confirmPass ? null : { notSame: true }
  }
  
}
