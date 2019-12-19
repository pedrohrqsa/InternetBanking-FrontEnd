import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlterarInfoService } from './alterar-info.service';
import { Cliente } from 'src/app/Models/Cliente';
import { Familiares } from 'src/app/Models/Familiares';
import { Contato } from 'src/app/Models/Contato';
import { Endereco } from 'src/app/Models/Endereco';

@Component({
  selector: 'app-alterar-info',
  templateUrl: './alterar-info.component.html',
  styleUrls: ['./alterar-info.component.css']
})
export class AlterarInfoComponent implements OnInit {

  indexCPF: number;

  cliente: Cliente;
  familiares: Familiares;
  contato: Contato;
  endereco: Endereco;

  editarPerfil: boolean = false;
  editarFamiliares: boolean = false;
  editarContato: boolean = false;
  editarEndereco: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alterarInfoService: AlterarInfoService
  ) { }

  ngOnInit() {
    this.getIndexCPF();
    this.onInfoCliente();
    this.onInfoFamiliares();
    this.onInfoContato();
    this.onInfoEndereco();
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

    return this.alterarInfoService.getInfoCliente()
      .subscribe(clientex =>
        console.log(getCpf,
          this.indexCPF = clientex.findIndex(obj =>
            obj.cpf == getCpf),
            this.onInfoCliente())
      );
  }

  onInfoCliente() {
    return this.alterarInfoService.getInfoCliente()
      .subscribe(clientex =>
        this.cliente = clientex[this.indexCPF],
      );
  }

  onInfoFamiliares() {
    return this.alterarInfoService.getInfoFamiliares()
      .subscribe(clientex =>
        this.familiares = clientex[this.indexCPF],
      );
  }

  onInfoContato() {
    return this.alterarInfoService.getInfoContato()
      .subscribe(clientex =>
        this.contato = clientex[this.indexCPF],
      );
  }

  onInfoEndereco() {
    return this.alterarInfoService.getInfoEndereco()
      .subscribe(clientex =>
        this.endereco = clientex[this.indexCPF],
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
