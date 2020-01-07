import { Component, OnInit } from '@angular/core';
import { ClienteLogin } from '../Models/ClienteLogin';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlterarSenhaService } from '../feed/configuracoes/alterar-senha/alterar-senha.service';
import { ActivatedRoute } from '@angular/router';
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
    private activatedRoute: ActivatedRoute, 
    private formBuilder : FormBuilder) { }

  ativar: boolean = false;
  AtivarContaFormGroup: FormGroup;

  indexCPF: number;
  cpf: string;
  rg:string;
  dtNascimento: Date;
  senhaAcesso: string;
  senhaTransacoes: string;

  ngOnInit() {
    this.AtivarContaFormGroup = this.formBuilder.group({
      rg: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      cpf: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      dtNascimento: ['' , [Validators.required/*, Validators.minLength(8), Validators.maxLength(15)*/]] ,
      senhaAcesso: [''  , [Validators.required/*, Validators.minLength(8), Validators.maxLength(15)*/]] ,
      senhaTransacoes: ['', [Validators.required/*, Validators.minLength(4), Validators.maxLength(4)*/]]
    },
      // { validator: this.checkPasswords }
    );
  }

  getIndexCPF() {
    // const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
    return this.alterarSenhaService.getInfoClienteLogin()
      .subscribe(clientex =>
        (this.indexCPF = clientex.findIndex(obj =>
          obj.cpf == this.cpf),
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
      .ativarConta(this.cpf, newStatus)
      .subscribe(
        () => this.reload(),
        err => alert("Não foi possível reativar sua conta."));
  }

  reload() {
    alert("Sua conta foi reativada com SUCESSO!");
    window.location.reload();
  }
}