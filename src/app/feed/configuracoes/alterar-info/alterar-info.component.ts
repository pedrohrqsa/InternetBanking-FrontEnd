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

}
