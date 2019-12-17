import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { TrocaSenha } from './troca-senha.component';
import { TrocaInfo } from './troca-info.component';
import { FechaConta } from './fecha-conta.component';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  abrirTrocaSenha(): void {
    this._bottomSheet.open(TrocaSenha);
  }
  
  abrirTrocaInfo(): void {
    this._bottomSheet.open(TrocaInfo);
  }

  abrirFechamentoConta(): void {
    this._bottomSheet.open(FechaConta);
  }
}
