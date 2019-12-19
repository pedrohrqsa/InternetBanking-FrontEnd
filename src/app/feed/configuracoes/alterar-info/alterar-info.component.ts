import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlterarInfoService } from './alterar-info.service';
import { Cliente } from 'src/app/Models/Cliente';
import { Familiares } from 'src/app/Models/Familiares';
import { Contato } from 'src/app/Models/Contato';
import { Endereco } from 'src/app/Models/Endereco';
import { InfoContaService } from '../../infos-conta/Infos-conta.service';

@Component({
  selector: 'app-alterar-info',
  templateUrl: './alterar-info.component.html',
  styleUrls: ['./alterar-info.component.css']
})
export class AlterarInfoComponent implements OnInit {

  editarPerfil: boolean = false;
  editarFamiliares: boolean = false;
  editarContato: boolean = false;
  editarEndereco: boolean = false;

  indexCPF: number;
  cliente: Cliente;
  familiares: Familiares;
  contato: Contato;
  endereco: Endereco;

  nome: string;
  sobrenome: string;
  cpf: string;
  rg: string;
  orgaoEmissor: string;
  dtNascimento: string;
  nacionalidade: string;
  naturalidade: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private infoContaService: InfoContaService
  ) { }

  ngOnInit() {
    this.getIndexCPF();
    this.onInfoCliente();
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

    return this.infoContaService.getInfoCliente()
      .subscribe(clientex =>
        console.log(getCpf,
          this.indexCPF = clientex.findIndex(obj =>
            obj.cpf == getCpf),
            this.onInfoCliente())
      );
  }

  onInfoCliente() {
    return this.infoContaService.getInfoCliente()
      .subscribe(clientex => {
          this.nome = clientex[this.indexCPF].nome;
          this.sobrenome = clientex[this.indexCPF].sobrenome;
          this.cpf = clientex[this.indexCPF].cpf;
          this.rg = clientex[this.indexCPF].rg;
          this.orgaoEmissor = clientex[this.indexCPF].orgaoEmissor;
          this.dtNascimento = clientex[this.indexCPF].dtNascimento.toString().substring(0, 10);
          this.nacionalidade = clientex[this.indexCPF].nacionalidade;
          this.naturalidade = clientex[this.indexCPF].naturalidade;
        },
      );
  }

  onEditarPerfil() {
    if(this.editarPerfil == false) {
      this.editarPerfil = true;
    } else {
      this.editarPerfil = false;
    }
  }

  onEditarFamiliares() {
    if(this.editarFamiliares == false) {
      this.editarFamiliares = true;
    } else {
      this.editarFamiliares = false;
    }
  }

  onEditarContato() {
    if(this.editarContato == false) {
      this.editarContato = true;
    } else {
      this.editarContato = false;
    }
  }

  onEditarEndereco() {
    if(this.editarEndereco == false) {
      this.editarEndereco = true;
    } else {
      this.editarEndereco = false;
    }
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