import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InativarContaService } from './inativar-conta.service';
import { Cliente } from 'src/app/Models/Cliente';
import { Conta } from 'src/app/Models/Conta';

@Component({
  selector: 'app-inativar-conta',
  templateUrl: './inativar-conta.component.html',
  styleUrls: ['./inativar-conta.component.css']
})
export class InativarContaComponent implements OnInit {

  indexCPF: number;

  cliente: Cliente;
  conta: Conta;

  constructor(
    private activatedRoute: ActivatedRoute,
    private inativarContaService: InativarContaService
  ) { }

  ngOnInit() {
    this.getIndexCPF();
    this.onInfoCliente();
    this.onInfoConta();
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

    return this.inativarContaService.getInfoCliente()
      .subscribe(clientex =>
        console.log(getCpf,
          this.indexCPF = clientex.findIndex(obj =>
            obj.cpf == getCpf),
            this.onInfoConta())
      );
  }

  onInfoCliente() {
    return this.inativarContaService.getInfoCliente()
      .subscribe(clientex =>
        this.cliente = clientex[this.indexCPF],
      );
  }

  onInfoConta() {
    return this.inativarContaService.getInfoConta()
      .subscribe(clientex =>
        this.conta.flagAtivo = clientex[this.indexCPF].flagAtivo,
      );
  }

}
