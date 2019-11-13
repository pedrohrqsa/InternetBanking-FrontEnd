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
  infosFamiliaresFormGroup: FormGroup;
  contatoFormGroup: FormGroup;
  enderecoFormGroup: FormGroup;
  confirmacaoFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private servico: CadastroService, private router: Router) {}

  ngOnInit() {
    this.dadosPessoaisFormGroup = this._formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(40)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(50)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      rg: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      orgaoRg: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      dataNasc: ['', [Validators.required]],
      nacionalidade: ['', [Validators.required, Validators.maxLength(20)]],
      naturalidade: ['', [Validators.required, Validators.maxLength(20)]]
    });
    this.infosFamiliaresFormGroup = this._formBuilder.group({
      nomeMae: ['', [Validators.required, Validators.maxLength(40)]],
      sobrenomeMae: ['', [Validators.required, Validators.maxLength(50)]],
      nomePai: ['', [Validators.maxLength(40)]],
      sobrenomePai: ['', [Validators.maxLength(50)]]
    });
    this.contatoFormGroup = this._formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      telefoneResid: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      telefoneCel: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(11), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      proprietario: ['']
    });
    this.enderecoFormGroup = this._formBuilder.group({
      logradouro: ['', [Validators.required, Validators.maxLength(50)]],
      numero: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      complemento: ['', [Validators.maxLength(30)]],
      bairro: ['', [Validators.required, Validators.maxLength(20)]],
      cidade: ['', [Validators.required, Validators.maxLength(30)]],
      siglaEstado: ['', [Validators.required, Validators.maxLength(2)]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    });
    this.confirmacaoFormGroup = this._formBuilder.group({
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    })
  }

  onCadastro() {
    const novoCliente = this.dadosPessoaisFormGroup.getRawValue() as Cliente;
    const familiaresUsuario = this.infosFamiliaresFormGroup.getRawValue() as Familiares;
    const contatoUsuario = this.contatoFormGroup.getRawValue() as Contato;
    const enderecoUsuario = this.enderecoFormGroup.getRawValue() as Endereco;
    const confirmacaoUsuario = this.confirmacaoFormGroup.getRawValue() as ClienteLogin;
    
    this.servico
      .cadastro(novoCliente, familiaresUsuario, contatoUsuario, enderecoUsuario, confirmacaoUsuario)
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
