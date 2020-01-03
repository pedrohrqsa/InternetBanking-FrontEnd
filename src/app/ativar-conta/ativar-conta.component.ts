import { Component, OnInit } from '@angular/core';
import { ClienteLogin } from '../Models/ClienteLogin';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlterarSenhaService } from '../feed/configuracoes/alterar-senha/alterar-senha.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ativar-conta',
  templateUrl: './ativar-conta.component.html',
  styleUrls: ['./ativar-conta.component.css']
})
export class AtivarContaComponent implements OnInit {

  ativar: boolean = false;
  alterarSenhaFormGroup: FormGroup;

  indexCPF: number;
  cpf: string;
  dtNascimento: Date;

  constructor(private alterarSenhaService: AlterarSenhaService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

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

  reload() {
    alert("Sua conta foi reativada com SUCESSO!");
    window.location.reload();
  }

  onAtivar() {
    const newClienteLogin = this.alterarSenhaFormGroup.getRawValue() as ClienteLogin;
    this.alterarSenhaService
      .alterarSenha(this.cpf, newClienteLogin)
      .subscribe(
        () => this.reload(),
        err => alert("Não foi possível reativar sua conta."))
  }

  verificar: boolean;
  onVerificarInfos() {
    this.verificar = true;

    // if(this.ativar == false){
    // this.ativar = true;
    // } else {
    //   this.ativar = false;
    // }

    if (this.verificar == true) {
      this.ativar = true;
    } else {
      this.ativar = false;
    }
  }
}