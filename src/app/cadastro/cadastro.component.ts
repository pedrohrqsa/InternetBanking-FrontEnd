import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Router } from '@angular/router';

import { Cliente, Endereco, Contato, Familiares, ClienteLogin } from './cadastroCliente';
import { CadastroService } from './cadastro.service';

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
  clienteLoginFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private servico: CadastroService, private router: Router) {}

  ngOnInit() {
    this.dadosPessoaisFormGroup = this._formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(40)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(50)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      rg: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      orgaoemissor: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      dtNascimento: ['', [Validators.required]],
      nacionalidade: ['', [Validators.required, Validators.maxLength(20)]],
      naturalidade: ['', [Validators.required, Validators.maxLength(20)]]
    });
    this.FamiliaresFormGroup = this._formBuilder.group({
      nome_Mae: ['', [Validators.required, Validators.maxLength(40)]],
      sobrenome_Mae: ['', [Validators.required, Validators.maxLength(50)]],
      nome_Pai: ['', [Validators.maxLength(40)]],
      sobrenome_Pai: ['', [Validators.maxLength(50)]]
    });
    this.contatoFormGroup = this._formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      tel_Resid: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      tel_Cel: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(11), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });
    this.enderecoFormGroup = this._formBuilder.group({
      logradouro: ['', [Validators.required, Validators.maxLength(50)]],
      numero: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      complemento: ['', [Validators.maxLength(30)]],
      bairro: ['', [Validators.required, Validators.maxLength(20)]],
      cidade: ['', [Validators.required, Validators.maxLength(30)]],
      sigla_estado: ['', [Validators.required, Validators.maxLength(2)]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    });
    this.clienteLoginFormGroup = this._formBuilder.group({
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    })
  }

  onCadastro() {
    const cliente = this.dadosPessoaisFormGroup.getRawValue() as Cliente;
    const familiares = this.FamiliaresFormGroup.getRawValue() as Familiares;
    const contato = this.contatoFormGroup.getRawValue() as Contato;
    const endereco = this.enderecoFormGroup.getRawValue() as Endereco;
    const clienteLogin = this.clienteLoginFormGroup.getRawValue() as ClienteLogin;
    
    this.servico
      .cadastro(cliente, familiares, contato, endereco, clienteLogin)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  letterOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) &&
    charCode != 32 && (charCode < 128 || charCode > 144) && (charCode < 147 || charCode > 154) &&
    (charCode < 160 || charCode > 165) && (charCode < 181 || charCode > 183) &&
    (charCode < 198 || charCode > 199) && (charCode < 97 || charCode > 122) &&
    (charCode < 210 || charCode > 216) && charCode != 222 && charCode != 224 &&
    (charCode < 226 || charCode > 229) && (charCode < 233 || charCode > 237) &&
    charCode != 96 && charCode != 126 && charCode != 239) {
      return false;
    }
    return true;
  }
}
