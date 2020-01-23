import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, Output, Input } from '@angular/core';

import { SaqueService } from './saque.service';
import { Transacao } from 'src/app/Models/Transacao';
import { InfoContaService } from '../infos-conta/Infos-conta.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})

export class SaqueComponent {

  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();

  form: FormGroup = new FormGroup({
    valor: new FormControl(''),
    senhaTransacoes: new FormControl('')
  });

  senha: string;
  indexCPF: number;
  numeroConta: number;
  senhaTransacoes: string;

  erro: boolean = false;
  sucesso: boolean = false;

  constructor(
    private servico: SaqueService,
    private infoContaService: InfoContaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getIndexCPF();
    this.onInfoConta();
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

  onSaque() {
    this.getIndexCPF();

    const cpf = this.activatedRoute.snapshot.paramMap.get("cpf");

    const transacao2 = this.form.getRawValue() as Transacao;

    transacao2.numeroConta = this.numeroConta;
    transacao2.idTipoTransacao = 2;
    transacao2.numeroContaOrigem = this.numeroConta;
    this.senhaTransacoes = transacao2.senhaTransacoes;

    this.servico.Saque(transacao2).subscribe(() => {
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
    this.form.reset();
  }
}