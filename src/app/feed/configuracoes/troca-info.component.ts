import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { ConfiguracoesService } from './configuracoes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'troca-info',
    templateUrl: 'troca-info.component.html',
  })
  export class TrocaInfo implements OnInit{

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
      private activatedRoute: ActivatedRoute) {}
      
      openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
      }
      
    ngOnInit(): void {
      this.onInfoCliente();
      this.onInfoFamiliares();
      this.onInfoContato();
      this.onInfoEndereco()
    }

    getIndexCPF() {

      const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
  
      return this.configuracoesService.getInfoCliente()
        .subscribe(clientex =>
          console.log(getCpf,
            this.indexCPF = clientex.findIndex(obj =>
              obj.cpf == getCpf))
        );
    }

    onInfoCliente() {
      return this.configuracoesService.getInfoCliente()
        .subscribe(clientex =>
          this.cpf = clientex[this.indexCPF].cpf,
          this.rg = clientex[this.indexCPF].rg,
          this.nome = clientex[this.indexCPF].nome,
          this.sobrenome = clientex[this.indexCPF].sobrenome,
          this.dtNascimento = clientex[this.indexCPF].dtNascimento,
          this.orgaoEmissor = clientex[this.indexCPF].orgaoEmissor,
          this.nacionalidade = clientex[this.indexCPF].nacionalidade,
          this.naturalidade = clientex[this.indexCPF].naturalidade
        );
    }
  
    onInfoFamiliares() {
      return this.configuracoesService.getInfoFamiliares()
        .subscribe(clientex =>
          this.nomeMae = clientex[this.indexCPF].nomeMae,
          this.sobrenomeMae = clientex[this.indexCPF].sobrenomeMae,
          this.nomePai = clientex[this.indexCPF].nomePai,
          this.sobrenomePai = clientex[this.indexCPF].sobrenomePai,
        );
    }
  
    onInfoContato() {
      return this.configuracoesService.getInfoContato()
        .subscribe(clientex =>
          this.email = clientex[0].email,
          this.telResid = clientex[0].telResid,
          this.telCel = clientex[0].telCel,
        );
    }

    onInfoEndereco() {
      return this.configuracoesService.getInfoEndereco()
        .subscribe(clientex =>
          this.logradouro = clientex[0].logradouro,
          this.numero = clientex[0].numero,
          this.complemento = clientex[0].complemento,
          this.bairro = clientex[0].bairro,
          this.cidade = clientex[0].cidade,
          this.siglaEstado = clientex[0].siglaEstado,
          this.cep = clientex[0].cep,
        );
    }
  }