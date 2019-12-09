import { Conta } from 'src/app/Models/Conta';
import { SaqueService } from './saque.service';
import { HttpClient } from '@angular/common/http';
import { Transacao } from 'src/app/Models/Transacao';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { InfoContaService } from '../infos-conta/Infos-conta.service';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})

export class SaqueComponent {

  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();

  form: FormGroup = new FormGroup({
    valor: new FormControl('')//,
    //senha1: new FormControl('')
  });

  senha: string;
  indexCPF: number;
  numeroConta: number;

  constructor(private _formBuilder: FormBuilder,
    private servico: SaqueService,
    private infoContaService: InfoContaService,
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getIndexCPF();
    this.onInfoConta();
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
    return this.infoContaService.getInfoCliente()
      .subscribe(clientex =>
        console.log(getCpf,
          this.indexCPF = clientex.findIndex(obj =>
            obj.cpf == getCpf),
          this.onInfoConta(), this.onSenhaConta())
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

  onSaque() {
    this.getIndexCPF();
    this.onInfoConta();
    this.onSenhaConta();

    const cpf = this.activatedRoute.snapshot.paramMap.get("cpf");

    const transacao1 = this.form.getRawValue() as Transacao;
    const senhaT = this.form.getRawValue() as Conta;

    // if ("1234" == this.senha) {
      transacao1.numeroConta = this.numeroConta;
      transacao1.idTipoTransacao = 2;
      transacao1.numeroContaOrigem = this.numeroConta;
      this.servico.Saque(transacao1).subscribe(() => this.router.navigate(['feed/' + cpf]), err => console.log(err));
    // }
  }
}