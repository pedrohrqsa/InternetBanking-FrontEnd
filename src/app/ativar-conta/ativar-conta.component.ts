import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Status } from '../Models/StatusConta';
import { AlterarSenhaService } from '../feed/configuracoes/alterar-senha/alterar-senha.service';
import { AtivarContaService } from './ativar-conta.service';

@Component({
  selector: 'app-ativar-conta',
  templateUrl: './ativar-conta.component.html',
  styleUrls: ['./ativar-conta.component.css']
})
export class AtivarContaComponent implements OnInit {

  constructor(
    private alterarSenhaService: AlterarSenhaService,
    private ativarContaService: AtivarContaService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ativar: boolean = false;
  AtivarContaFormGroup: FormGroup;

  indexCPF: number;
  cpf: string;
  rg: string;
  dtNascimento: Date;
  senhaAcesso: string;
  senhaTransacoes: string;

  sucesso: boolean = false;
  erro: boolean = false;

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.AtivarContaFormGroup = this.formBuilder.group({
      rg: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      cpf: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      dtNascimento: ['', [Validators.required/*, Validators.minLength(8), Validators.maxLength(15)*/]],
      senhaAcesso: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      senhaTransacoes: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });
  }

  getIndexCPF() {
    const getCpf = this.cpf;
    return this.alterarSenhaService.getInfoClienteLogin()
      .subscribe(clientex =>
        (this.indexCPF = clientex.findIndex(obj =>
          obj.cpf == getCpf),
          this.onInfoClienteLogin()
        ));
  }

  onInfoClienteLogin() {
    return this.alterarSenhaService.getInfoClienteLogin()
      .subscribe(clientex => {
        this.cpf = clientex[this.indexCPF].cpf
      });
  }

  onAtivar() {
    this.getIndexCPF();
    this.onInfoClienteLogin();

    const newStatus = this.AtivarContaFormGroup.getRawValue() as Status;

    this.ativarContaService
      .ativarConta(newStatus)
      .subscribe(
        () => {
          this.AtivarContaFormGroup.reset();
          this.sucesso = true;
          this.erro = false;
          setTimeout(() => this.reload(), 3000);
        },
        err => {
          console.log("Erro de chamado");
          this.erro = true;
          this.sucesso = false;
        }
      );
  }

  reload() {
    this.router.navigate(['']);
  }
}