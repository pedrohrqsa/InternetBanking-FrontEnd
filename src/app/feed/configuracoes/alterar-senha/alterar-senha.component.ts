import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClienteLogin } from 'src/app/Models/ClienteLogin';
import { AlterarSenhaService } from './alterar-senha.service';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
      }

      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  alterarSenhaFormGroup: FormGroup;

  indexCPF: number;
  senha: string;
  cpf: string;

  sucesso: boolean = false;
  erro: boolean = false;

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
      { validator: MustMatch('novaSenha', 'confirmacaoNovaSenha')}
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
        () => {
          this.reload(),
          this.sucesso = true;
          this.erro = false;
        },
          err =>{
            console.log("Erro de chamado");
            this.erro = true;
            this.sucesso = false;
          }
      );
  }

  reload() {
    window.location.reload();
  }

}
