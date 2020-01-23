import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SaldoService } from './saldo.service';
import { InfoContaService } from '../../infos-conta/Infos-conta.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  saldoAtual: number;
  indexCPF: number;
  progresso = 0;
  mostrar = false;

  constructor(
    private saldoService: SaldoService,
    private activatedRoute: ActivatedRoute,
    private infoContaService: InfoContaService,
  ) { }

  ngOnInit() {
    this.getIndexCPF();
    this.onSaldo();
  }

  mostrarSaldo(){
    if(!this.mostrar){
      this.mostrar = true;
    } else {
      this.mostrar = false;
    }

    this.onSaldo();
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

    return this.infoContaService.getInfoCliente()
      .subscribe(clientex =>
        (this.indexCPF = clientex.findIndex(obj =>
          obj.cpf == getCpf,  this.onSaldo())
        )
      );
  }

  onSaldo() {
    this.getIndexCPF();
    return this.saldoService.GetInfoSaldo()
      .subscribe(
        saldox => this.saldoAtual = saldox[this.indexCPF].saldoAtual
      );
  }
}
