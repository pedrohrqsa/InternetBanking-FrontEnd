import { Component, OnInit } from '@angular/core';
import { ClienteLogin } from '../Models/ClienteLogin';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlterarSenhaService } from '../feed/configuracoes/alterar-senha/alterar-senha.service';
import { Router } from '@angular/router';
import { Status } from '../Models/StatusConta';
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
          this.reload();
        },
        err => {
          console.log(err);
          alert("Não foi possível reativar sua conta.");
        }
      );
  }

  reload() {
    this.router.navigate(['']);
  }
}