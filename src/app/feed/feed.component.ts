import { Component, OnInit } from '@angular/core';
import { SaldoService } from './shared/saldo/saldo.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  onConfig(){
    if(this.config == false){
      this.config = true;
    } else {
      this.config = false;
    }
  }

  onSaldo(){
    if(this.saldo == false){
      this.config = false;
      this.saldo = true;
    } else {
      this.saldo = false;
    }
  }

  onInicio(){
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

  onExtrato(){
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

  onDeposito(){
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

  onSaque(){
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

  onTransferencia(){
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

  onAlterarDados(){
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

  onAlterarSenha(){
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

  onDesativarConta(){
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
        console.log(getCpf,
          this.indexCPF = clientex.findIndex(obj =>
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
