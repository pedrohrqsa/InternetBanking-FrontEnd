import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  conta: boolean = false;
  senha: boolean = false;
  dados: boolean = false;

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

  // abrirTrocaSenha(): void {
  //   this._bottomSheet.open(TrocaSenhaComponent);
  // }
  
  // abrirTrocaInfo(): void {
  //   this._bottomSheet.open(TrocaInfoComponent);
  // }

  // abrirInativarConta(): void {
  //   this._bottomSheet.open(InativarContaComponent);
  // }
}
