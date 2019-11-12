import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Cliente, Endereco, Contato, Familiares, ClienteLogin } from './cadastroCliente';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro',
    templateUrl: 'cadastro.component.html',
    styleUrls: ['cadastro.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class CadastroComponent implements OnInit {
  dadosPessoaisFormGroup: FormGroup;
  FamiliaresFormGroup: FormGroup;
  contatoFormGroup: FormGroup;
  enderecoFormGroup: FormGroup;
  LoginFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private servico: CadastroService, private router: Router) {}

  ngOnInit() {
    this.dadosPessoaisFormGroup = this._formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(40)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(50)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      rg: ['', [Validators.required, Validators.minLength(9), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      orgaoemissor: ['', [Validators.required]],
      DtNascimento: ['', [Validators.required]],
      nacionalidade: ['', [Validators.required]],
      naturalidade: ['', [Validators.required]]
    });
    this.FamiliaresFormGroup = this._formBuilder.group({
      nome_Mae: ['', [Validators.required]],
      sobrenome_Mae: ['', [Validators.required]],
      nome_Pai: [''],
      sobrenome_Pai: ['']
    });
    this.contatoFormGroup = this._formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      tel_Resid: [''],
      tel_Cel: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(9), Validators.maxLength(9)]]
    });
    this.enderecoFormGroup = this._formBuilder.group({
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: [''],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      sigla_Estado: ['', [Validators.required]],
      cep: ['', [Validators.required]]
    });
    this.LoginFormGroup = this._formBuilder.group({
      cpf: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    })
  }

  onCadastro() {
    const cliente = this.dadosPessoaisFormGroup.getRawValue() as Cliente;
    const familiares = this.FamiliaresFormGroup.getRawValue() as Familiares;
    const contato = this.contatoFormGroup.getRawValue() as Contato;
    const endereco = this.enderecoFormGroup.getRawValue() as Endereco;
    const clienteLogin = this.LoginFormGroup.getRawValue() as ClienteLogin;
    this.servico
      .cadastro(cliente, familiares, contato, endereco, clienteLogin)
      .subscribe( 
        () => this.router.navigate(['']),
        err => console.log(err)
      );
  }
}
