import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SaldoService } from './shared/saldo/saldo.service';
import { InfoContaService } from './infos-conta/Infos-conta.service';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  inicio: boolean = true;
  extrato: boolean = false;
  deposito: boolean = false;
  saque: boolean = false;
  transferencia: boolean = false;
  config: boolean = false;
  alterarDados: boolean = false;
  alterarSenha: boolean = false;
  desativarConta: boolean = false;
  saldo: boolean = false;
  indexCPF: number;
  saldoAtual: number;
  infoSaldo: string = "Saldo disponível";
  icone: boolean = true;


  constructor(
    private saldoService: SaldoService,
    private activatedRoute: ActivatedRoute,
    private infoContaService: InfoContaService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getIndexCPF();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  onConfig() {
    if (this.config == false) {
      this.config = true;
    } else {
      this.config = false;
    }
  }

  onSaldo() {
    if (this.saldo == false) {
      this.infoSaldo = "Ocultar saldo";
      this.config = false;
      this.saldo = true;
      this.icone = false;
    } else {
      this.saldo = false;
      this.infoSaldo = "Saldo disponível";
      this.icone = true;
    }
  }

  onInicio() {
    this.inicio = true;
    this.extrato = false;
    this.deposito = false;
    this.saque = false;
    this.transferencia = false;

    this.alterarDados = false;
    this.alterarSenha = false;
    this.desativarConta = false;
    this.config = false;
  }

  onExtrato() {
    this.inicio = false;
    this.extrato = true;
    this.deposito = false;
    this.saque = false;
    this.transferencia = false;

    this.alterarDados = false;
    this.alterarSenha = false;
    this.desativarConta = false;
    this.config = false;
  }

  onDeposito() {
    this.inicio = false;
    this.extrato = false;
    this.deposito = true;
    this.saque = false;
    this.transferencia = false;

    this.alterarDados = false;
    this.alterarSenha = false;
    this.desativarConta = false;
    this.config = false;
  }

  onSaque() {
    this.inicio = false;
    this.extrato = false;
    this.deposito = false;
    this.saque = true;
    this.transferencia = false;

    this.alterarDados = false;
    this.alterarSenha = false;
    this.desativarConta = false;
    this.config = false;
  }

  onTransferencia() {
    this.inicio = false;
    this.extrato = false;
    this.deposito = false;
    this.saque = false;
    this.transferencia = true;

    this.alterarDados = false;
    this.alterarSenha = false;
    this.desativarConta = false;
    this.config = false;
  }

  onAlterarDados() {
    this.inicio = false;
    this.extrato = false;
    this.deposito = false;
    this.saque = false;
    this.transferencia = false;

    this.alterarDados = true;
    this.alterarSenha = false;
    this.desativarConta = false;
    this.config = false;
  }

  onAlterarSenha() {
    this.inicio = false;
    this.extrato = false;
    this.deposito = false;
    this.saque = false;
    this.transferencia = false;

    this.alterarDados = false;
    this.alterarSenha = true;
    this.desativarConta = false;
    this.config = false;
  }

  onDesativarConta() {
    this.inicio = false;
    this.extrato = false;
    this.deposito = false;
    this.saque = false;
    this.transferencia = false;

    this.alterarDados = false;
    this.alterarSenha = false;
    this.desativarConta = true;
    this.config = false;
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

    return this.infoContaService.getInfoCliente()
      .subscribe(clientex =>
        (this.indexCPF = clientex.findIndex(obj =>
          obj.cpf == getCpf))
      );
  }

  onExibeSaldo() {
    return this.saldoService.GetInfoSaldo()
      .subscribe(saldox =>
        this.saldoAtual = saldox[this.indexCPF].saldoAtual
      );
  }
}
