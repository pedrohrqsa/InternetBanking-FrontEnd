import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InfoContaService } from './Infos-conta.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-infos-conta',
  templateUrl: './infos-conta.component.html',
  styleUrls: ['./infos-conta.component.css']
})
export class InfosContaComponent implements OnInit {

  nome: string;
  sobrenome: string;
  numeroConta: number;
  numeroAgencia: number;
  indexCPF: number;
  saldo: number;
  mostrarSaldo: boolean = false;

  constructor(
    private userService: UserService,
    private infoContaService: InfoContaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  form: FormGroup = new FormGroup({
    saldo: new FormControl(''),
    valorDeposito: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();

  ngOnInit() {
    this.getIndexCPF();
    this.onInfoCliente();
    this.onInfoConta();
    this.onInfoAgencia();
    this.onInfoSaldo();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  getSaldo(){
    this.onInfoSaldo();
    if(this.mostrarSaldo == false){
      this.mostrarSaldo = true;
    } else {
      this.mostrarSaldo = false;
    }
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

    return this.infoContaService.getInfoCliente()
      .subscribe(clientex =>
        (this.indexCPF = clientex.findIndex(obj =>
            obj.cpf == getCpf),
            this.onInfoConta())
      );
  }

  onInfoCliente() {
    return this.infoContaService.getInfoCliente()
      .subscribe(clientex => {
        this.nome = clientex[this.indexCPF].nome;
        this.sobrenome = clientex[this.indexCPF].sobrenome;
      }
      );
  }

  onInfoSaldo() {
    return this.infoContaService.getInfoConta()
      .subscribe(clientex => {
        this.saldo = clientex[this.indexCPF].saldoAtual;
      }
      );
  }

  onInfoConta() {
    return this.infoContaService.getInfoConta()
      .subscribe(clientex =>
        this.numeroConta = clientex[this.indexCPF].numeroConta
      );
  }

  // AGENCIA SEMPRE TERÁ A MESMA POSIÇÃO ATÉ TER OUTRAS AGENCIAS.
  onInfoAgencia() {
    return this.infoContaService.getInfoAgencia()
      .subscribe(clientex =>
        this.numeroAgencia = clientex[0].numeroAgencia,
      );
  }
}