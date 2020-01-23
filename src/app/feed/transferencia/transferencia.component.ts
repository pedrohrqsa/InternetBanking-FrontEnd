import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { InfoContaService } from '../infos-conta/Infos-conta.service';
import { Transacao } from 'src/app/Models/Transacao';
import { TransferenciaService } from './transferencia.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})

export class TransferenciaComponent {
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();

  nome: string;
  indexCPF: number;
  numeroConta: number;
  numeroContaOrigem: number;
  numeroContaDestino: number;
  valor: number;
  senhaTransacoes: string;
  sucesso: boolean = false;
  erro: boolean = false;

  form: FormGroup = new FormGroup({
    numeroContaDestino: new FormControl(''),
    valor: new FormControl(''),
    senhaTransacoes: new FormControl('')
  });

  constructor(private infoContaService: InfoContaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private servico: TransferenciaService,
    private _formBuilder: FormBuilder
    ) { }

  submit() { }

  ngOnInit(): void {
    this.getIndexCPF();
    this.form = this._formBuilder.group({
      numeroContaDestino: [''],
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
  onTransferencia() {

    this.getIndexCPF();

    const cpf = this.activatedRoute.snapshot.paramMap.get("cpf");

    const transacao3 = this.form.getRawValue() as Transacao;

    transacao3.numeroConta = this.numeroConta;
    transacao3.numeroContaOrigem = this.numeroConta;
    transacao3.idTipoTransacao = 3;
    this.senhaTransacoes = transacao3.senhaTransacoes;
    transacao3.numeroContaDestino = this.form.get('numeroContaDestino').value;

    this.servico.Transferecia(transacao3)
      .subscribe(() => {
        this.router.navigate(['feed/' + cpf]);
        this.sucesso = true;
        this.erro = false;
      },
        err => {
          console.log("Erro de chamado");
          this.erro = true;
          this.sucesso = false;
      });
    this.form.reset();
  }
}
