import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ClienteLogin } from 'src/app/Models/ClienteLogin';
import { AlterarSenhaService } from './alterar-senha.service';
import { ErrorStateMatcher } from '@angular/material';

export class PasswordMatcher implements ErrorStateMatcher {
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

  alterarSenhaFormGroup: FormGroup;
  passwordMatcher = new PasswordMatcher();

  indexCPF: number;
  senha: string;
  cpf: string;

  constructor(
    private alterarSenhaService: AlterarSenhaService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getIndexCPF();
    this.onInfoClienteLogin();

    this.alterarSenhaFormGroup = this.formBuilder.group({
      antigaSenha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      novaSenha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      confirmacaoNovaSenha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    },
      { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls.novaSenha.value;
    let confirmPass = group.controls.confirmacaoNovaSenha.value;
    return pass === confirmPass ? null : { notSame: true }
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

    return this.alterarSenhaService.getInfoClienteLogin()
      .subscribe(clientex =>
        (this.indexCPF = clientex.findIndex(obj =>
          obj.cpf == getCpf),
          this.onInfoClienteLogin()
        )
      );
  }

  onInfoClienteLogin() {
    return this.alterarSenhaService.getInfoClienteLogin()
      .subscribe(clientex => {
        this.cpf = clientex[this.indexCPF].cpf;
      },
      );
  }

  alterarSenha() {
    const newClienteLogin = this.alterarSenhaFormGroup.getRawValue() as ClienteLogin;
    this.alterarSenhaService
      .alterarSenha(this.cpf, newClienteLogin)
      .subscribe(
        () => this.reload(),
        err => alert("Não foi possível alterar sua senha. Você digitou alguma informação incorretamente!")
      );
  }

  reload() {
    alert("Informações alteradas com sucesso!");
    window.location.reload();
  }

}
