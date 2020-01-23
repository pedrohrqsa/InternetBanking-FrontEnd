import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, Output, Input } from '@angular/core';

import { DepositoService } from './deposito.service';
import { Transacao } from 'src/app/Models/Transacao';
import { InfoContaService } from '../infos-conta/Infos-conta.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent {
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();

  senha: string;
  indexCPF: number;
  saldoAtual: number;
  numeroConta: number;
  senhaTransacoes: string;
  
  sucesso: boolean = false;
  erro: boolean = false;

  form: FormGroup = new FormGroup({
    valor: new FormControl(''),
    senhaTransacoes: new FormControl('')
  });

  constructor(
    private servico: DepositoService,
    private infoContaService: InfoContaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getIndexCPF();
    this.form = this._formBuilder.group({
      valor: ['0'],
      senhaTransacoes: ['']
    })
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

  onInfoConta() {
    return this.infoContaService.getInfoConta()
      .subscribe(clientex =>
        this.numeroConta = clientex[this.indexCPF].numeroConta,
      );
  }

  onDeposito() {
    this.getIndexCPF();
    const cpf = this.activatedRoute.snapshot.paramMap.get("cpf");    
    const transacao1 = this.form.getRawValue() as Transacao;
    transacao1.numeroConta = this.numeroConta;
    transacao1.idTipoTransacao = 1;
    transacao1.numeroContaDestino = this.numeroConta;
    this.senhaTransacoes = transacao1.senhaTransacoes;

    this.servico.Deposito(transacao1)
      .subscribe(() => {
        this.router.navigate(['feed/' + cpf]);        
        this.sucesso = true;
        this.erro = false;
        this.ngOnInit();
        
      },
        err => {
          console.log("Erro de chamado");
          this.erro = true;
          this.sucesso = false;
      });

    
    


    
    this.sucesso = true;

  }
}