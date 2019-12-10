import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoContaService } from '../infos-conta/Infos-conta.service';
import { HttpClient } from '@angular/common/http';
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

  // saldoAtual: number;
  nome: string;
  indexCPF: number;
  numeroConta: number;
  numeroContaOrigem: number;
  numeroContaDestino: number;
  valor: number;

  form: FormGroup = new FormGroup({
    // saldo: new FormControl(''),
    numeroContaDestino: new FormControl(''),
    // NomeTitularContaDestino: new FormControl(''),
    valor: new FormControl(''),
  });

  // this.valor = this.form.get('valor').value;
  // this.numeroContaDestino = this.form.get('numeroContaDestino').value;

  constructor(private infoContaService: InfoContaService,
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private servico: TransferenciaService) { }

  submit() { }

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
  onTransferencia() {

    this.getIndexCPF();

    const cpf = this.activatedRoute.snapshot.paramMap.get("cpf");

    const transacao3 = this.form.getRawValue() as Transacao;

    transacao3.numeroConta = this.numeroConta;
    transacao3.numeroContaOrigem = this.numeroConta;
    transacao3.idTipoTransacao = 3;
    transacao3.numeroContaDestino = this.form.get('numeroContaDestino').value;

    this.servico.Transferecia(transacao3)
      .subscribe(() =>
        this.router.navigate(['feed/' + cpf]),
        err => console.log(err));
  }


}
