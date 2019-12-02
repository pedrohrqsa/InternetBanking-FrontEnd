import { Component, OnInit } from '@angular/core';
import { SaldoService } from './saldo.service';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { InfoContaService } from '../../infos-conta/Infos-conta.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  constructor(
    private saldoService: SaldoService,
    private activatedRoute: ActivatedRoute,
    private infoContaService: InfoContaService,
  ) { }

  saldo: number;
  indexCPF: number;

  isShown: boolean = false; // hidden by default

  toggleShow() {
    this.isShown = !this.isShown;
    this.onSaldo();
  }

  ngOnInit() {
    this.getIndexCPF();
    this.onSaldo();
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

    return this.infoContaService.getInfoCliente()
      .subscribe(clientex =>
        console.log(getCpf,
          this.indexCPF = clientex.findIndex(obj =>
            obj.cpf == getCpf))
      );
  }

  onSaldo() {
    return this.saldoService.GetInfoSaldo()
      .subscribe(saldox =>
        this.saldo = saldox[this.indexCPF].saldo
      );
  }
}
