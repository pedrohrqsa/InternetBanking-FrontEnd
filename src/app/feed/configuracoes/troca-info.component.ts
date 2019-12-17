import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { ConfiguracoesService } from './configuracoes.service';
import { ActivatedRoute } from '@angular/router';
import { InfoContaService } from '../infos-conta/Infos-conta.service';

@Component({
  selector: 'troca-info',
  templateUrl: 'troca-info.component.html',
})
export class TrocaInfo implements OnInit {

  indexCPF: number;

  cpf: string;
  rg: string;
  nome: string;
  sobrenome: string;
  dtNascimento: Date;
  orgaoEmissor: string;
  nacionalidade: string;
  naturalidade: string;

  nomeMae: string;
  sobrenomeMae: string;
  nomePai: string;
  sobrenomePai: string;

  email: string;
  telResid: string;
  telCel: string;

  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  siglaEstado: string;
  cep: string;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<TrocaInfo>,
    private configuracoesService: ConfiguracoesService,
    private infoContaService : InfoContaService,
    private activatedRoute: ActivatedRoute) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    this.getIndexCPF();
    this.onInfoCliente();
    // this.onInfoFamiliares();
    // this.onInfoContato();
    // this.onInfoEndereco()
  }

  getIndexCPF() {

    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

    return this.configuracoesService.getInfoCliente()
      .subscribe(clientex =>
        console.log(getCpf,
          this.indexCPF = clientex.findIndex(obj =>
            obj.cpf == getCpf))//,
            // this.onInfoCliente())
      );
  }


  onInfoCliente() {
    return this.configuracoesService.getInfoCliente()
      .subscribe(clientex =>
        this.cpf = clientex[0].cpf,
        clientenome =>
        this.nome = clientenome[0].nome
        );
  }

  // onInfoFamiliares() {
  //   return this.configuracoesService.getInfoFamiliares()
  //     .subscribe(clientex =>
  //       this.nomeMae = clientex[this.indexCPF].nomeMae,
  //     );
  // }

  // onInfoContato() {
  //   return this.configuracoesService.getInfoContato()
  //     .subscribe(clientex =>
  //       this.email = clientex[this.indexCPF].email,
  //     );
  // }

  // onInfoEndereco() {
  //   return this.configuracoesService.getInfoEndereco()
  //     .subscribe(clientex =>
  //       this.logradouro = clientex[this.indexCPF].logradouro,
  //     );
  // }
}