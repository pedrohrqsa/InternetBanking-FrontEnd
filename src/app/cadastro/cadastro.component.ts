import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators,
  FormGroupDirective, NgForm, FormControl
} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

import { CadastroService } from './cadastro.service';
import { Cliente } from '../Models/Cliente';
import { Familiares } from '../Models/Familiares';
import { Contato } from '../Models/Contato';
import { Endereco } from '../Models/Endereco';
import { ClienteLogin } from '../Models/ClienteLogin';
import { Conta } from '../Models/Conta';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.component.html',
  styleUrls: ['cadastro.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})

export class CadastroComponent implements OnInit {
  dadosPessoaisFormGroup: FormGroup;
  FamiliaresFormGroup: FormGroup;
  contatoFormGroup: FormGroup;
  enderecoFormGroup: FormGroup;
  clienteLoginFormGroup: FormGroup;
  senhaFormGroup: FormGroup;
  fotoFormGroup: FormGroup;
  matcher = new MyErrorStateMatcher();
  Foto: File = null;
  dataLimiter = new Date();


  fileToUpload: File = null;

  constructor(
    private router: Router,
    private servico: CadastroService,
    private _formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
    this.dataLimiter.setUTCFullYear(this.dataLimiter.getFullYear()-18);
    this.dataLimiter.setUTCDate(this.dataLimiter.getDate()+1);

    this.dadosPessoaisFormGroup = this._formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(40)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(50)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]],
      rg: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      orgaoEmissor: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      dtNascimento: ['', [Validators.required]],
      nacionalidade: ['', [Validators.required, Validators.maxLength(20)]],
      naturalidade: ['', [Validators.required, Validators.maxLength(20)]]
    });
    this.FamiliaresFormGroup = this._formBuilder.group({
      nomeMae: ['', [Validators.required, Validators.maxLength(40)]],
      sobrenomeMae: ['', [Validators.required, Validators.maxLength(50)]],
      nomePai: ['', [Validators.maxLength(40)]],
      sobrenomePai: ['', [Validators.maxLength(50)]]
    });
    this.contatoFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email, , Validators.maxLength(30)]],
      telResid: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      telCel: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(11), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });
    this.enderecoFormGroup = this._formBuilder.group({
      logradouro: ['', [Validators.required, Validators.maxLength(50)]],
      numero: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      complemento: ['', [Validators.maxLength(30)]],
      bairro: ['', [Validators.required, Validators.maxLength(20)]],
      cidade: ['', [Validators.required, Validators.maxLength(30)]],
      siglaEstado: ['', [Validators.required, Validators.maxLength(2), Validators.maxLength(2)]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(/^[0-9]*$/)]]
    });
    this.clienteLoginFormGroup = this._formBuilder.group({
      senhaAcesso: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      confirmacaoSenha: ['', [Validators.minLength(8), Validators.maxLength(15)]]
    },
      { validator: this.checkPasswords }
    );
    this.senhaFormGroup = this._formBuilder.group({
      senhaTransacoes: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });

    this.fotoFormGroup = this._formBuilder.group({
      foto: ['', [Validators.required]]
    });
  }

  fileProgress(fileInput: any) {
    this.Foto = <File>fileInput.target.files[0];
  }

  onCadastro() {
    const cliente = this.dadosPessoaisFormGroup.getRawValue() as Cliente;
    const familiares = this.FamiliaresFormGroup.getRawValue() as Familiares;
    const contato = this.contatoFormGroup.getRawValue() as Contato;
    const endereco = this.enderecoFormGroup.getRawValue() as Endereco;
    let clienteLogin = this.clienteLoginFormGroup.getRawValue() as ClienteLogin;
    let senhaTransacoes = this.senhaFormGroup.getRawValue() as Conta;
    clienteLogin.cpf = cliente.cpf;

    this.servico
      .cadastro(cliente, familiares, contato, endereco, clienteLogin, senhaTransacoes)
      .subscribe(
        () => console.log("Usuário cadastrado!"),
        err => console.log(err)
      );
  }

  selectedFile: File
  onUpload() {
    const cliente = this.dadosPessoaisFormGroup.getRawValue() as Cliente;

    this.selectedFile = this.Foto;
    const uploadData = new FormData();

    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post(environment.API_URL + '/api/upload/' + cliente.cpf, uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event);
        this.router.navigate([''])
      });
  }

  nonTypingField(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode >= 0 && charCode <= 255) {
      return false;
    }
    return true;
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

  checkPasswords(group: FormGroup) {
    let pass = group.controls.senhaAcesso.value;
    let confirmPass = group.controls.confirmacaoSenha.value;
    return pass === confirmPass ? null : { notSame: true }
  }

  onBuscaCEP() {
    const endereco = this.enderecoFormGroup.getRawValue() as Endereco;
    this.servico.buscaCEP(endereco.cep)
      .subscribe(
        address => this.enderecoFormGroup = this._formBuilder.group({
          logradouro: [address.logradouro, [Validators.required, Validators.maxLength(50)]],
          numero: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
          complemento: [address.complemento, [Validators.maxLength(30)]],
          bairro: [address.bairro, [Validators.required, Validators.maxLength(20)]],
          cidade: [address.localidade, [Validators.required, Validators.maxLength(30)]],
          siglaEstado: [address.uf, [Validators.required, Validators.maxLength(2), Validators.maxLength(2)]],
          cep: [address.cep.replace("-", ""), [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(/^[0-9]*$/)]]
        }));
  }
}