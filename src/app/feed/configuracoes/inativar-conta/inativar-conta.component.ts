import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Cliente } from 'src/app/Models/Cliente';
import { Conta } from 'src/app/Models/Conta';
import { InativarContaService } from './inativar-conta.service';
import { InfoContaService } from '../../infos-conta/Infos-conta.service';

@Component({
  selector: 'app-inativar-conta',
  templateUrl: './inativar-conta.component.html',
  styleUrls: ['./inativar-conta.component.css']
})
export class InativarContaComponent implements OnInit {

  inativarContaFormGroup: FormGroup;
  cliente: Cliente;
  conta: Conta;

  cpf: string;
  indexCPF: number;
  numeroConta: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private infoContaService: InfoContaService,
    private inativarContaService: InativarContaService
  ) { }

  ngOnInit() {
    this.getIndexCPF();
    this.onInfoCliente();

    this.inativarContaFormGroup = this.formBuilder.group({
      senhaAcesso: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      senhaTransacoes: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

    return this.infoContaService.getInfoCliente()
      .subscribe(clientex =>
        console.log(getCpf,
          this.indexCPF = clientex.findIndex(obj =>
            obj.cpf == getCpf),
            this.onInfoCliente())
      );
  }
  onInfoCliente() {
    return this.infoContaService.getInfoCliente()
      .subscribe(clientex => {
        this.cpf = clientex[this.indexCPF].cpf;
      });
  }


  inativarConta() {
    this.getIndexCPF();
    this.onInfoCliente();

    const newConta = this.inativarContaFormGroup.getRawValue() as Conta;
    this.inativarContaService
      .inativarConta(this.cpf, newConta)
      .subscribe(
        // () => this.router.navigate(['/home']),
        () => this.reload(),
        err => console.log(err)
      );
  }
  reload() {
    alert("Informações alteradas com sucesso!");
    window.location.reload();
  }
}
