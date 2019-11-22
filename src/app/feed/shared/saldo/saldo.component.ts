import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  isShown: boolean = false; // hidden by default

  toggleShow() {
    this.isShown = !this.isShown;
  }

  constructor() { }

  ngOnInit() { }

  onSaldo() {
    //CRIAR METODO SELECT/GET PARA O SERVICE EXECUTAR
    }

}
