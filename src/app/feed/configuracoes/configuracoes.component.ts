import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  constructor() { }

  dados: boolean = true;
  senha: boolean = false;
  conta: boolean = false;

  ngOnInit() {
  }

  onDados(){
    this.conta = false;
    this.senha = false;
    this.dados = true;
  }
  onSenha(){
    this.conta = false;
    this.senha = true;
    this.dados = false;
  }
  onConta(){
    this.conta = true;
    this.senha = false;
    this.dados = false;
  }

}
