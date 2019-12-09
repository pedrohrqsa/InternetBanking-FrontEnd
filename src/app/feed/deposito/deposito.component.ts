import { HttpClient } from '@angular/common/http';
import { DepositoService } from './deposito.service';
import { Transacao } from 'src/app/Models/Transacao';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { InfoContaService } from '../infos-conta/Infos-conta.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent {
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();

  saldoAtual: number;
  indexCPF: number;
  numeroConta: number;
  senha: string;

  form: FormGroup = new FormGroup({
    valor: new FormControl('')
  });

  constructor(private _formBuilder: FormBuilder,
    private servico: DepositoService,
    private infoContaService: InfoContaService,
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getIndexCPF();
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
    return this.infoContaService.getInfoCliente()
      .subscribe(clientex =>
        console.log(getCpf,
          this.indexCPF = clientex.findIndex(obj =>
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

  onSenhaConta() {
    return this.infoContaService.getInfoConta()
      .subscribe(clientex =>
        this.senha = clientex[this.indexCPF].senhaTransacoes,
      );
  }

  onDeposito() {
    this.getIndexCPF();
    const cpf = this.activatedRoute.snapshot.paramMap.get("cpf");
    const transacao1 = this.form.getRawValue() as Transacao;
    transacao1.numeroConta = this.numeroConta;
    transacao1.idTipoTransacao = 1;
    transacao1.numeroContaDestino = this.numeroConta;
    this.servico.Deposito(transacao1).subscribe(() => this.router.navigate(['feed/' + cpf]), err => console.log(err));
  }
}