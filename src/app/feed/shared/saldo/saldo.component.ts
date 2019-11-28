import { Component, OnInit } from '@angular/core';
import { SaldoService } from './saldo.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  constructor(private saldoService: SaldoService) { }

  saldo: number;

  isShown: boolean = false; // hidden by default

  toggleShow() {
    this.isShown = !this.isShown;
    this.onSaldo();
  }

  ngOnInit() { 
  }

  onSaldo() {
    return this.saldoService.GetInfoSaldo()
      .subscribe(saldox =>
        this.saldo = saldox[0].saldo
      );
  }
}
