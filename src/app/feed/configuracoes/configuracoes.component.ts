import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
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
