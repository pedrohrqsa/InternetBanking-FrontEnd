import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Cliente } from 'src/app/Models/Cliente';
import { Conta } from 'src/app/Models/Conta';
import { InativarContaService } from './inativar-conta.service';
import { InfoContaService } from '../../infos-conta/Infos-conta.service';
import { UserService } from 'src/app/core/user/user.service';
import { ClienteLogin } from 'src/app/Models/ClienteLogin';

@Component({
  selector: 'app-inativar-conta',
  templateUrl: './inativar-conta.component.html',
  styleUrls: ['./inativar-conta.component.css']
})
export class InativarContaComponent implements OnInit {

  inativarContaFormGroup: FormGroup;
  cliente: Cliente;
  conta: Conta;

  indexCpf: number;
  indexNumeroConta: number;
  numeroConta: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private infoContaService: InfoContaService,
    private inativarContaService: InativarContaService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getIndexCPF();
    this.onInfoConta();

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
          this.indexCpf = clientex.findIndex(obj =>
            obj.cpf == getCpf),
          this.onInfoConta())
      );
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
  // getNumeroConta() {
  //   const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

  //   return this.infoContaService.getInfoConta()
  //     .subscribe(clientex =>
  //       console.log(getCpf,
  //         this.indexCpf = clientex.findIndex(obj =>
  //           obj.cpf == getCpf),
  //         this.onInfoConta())
  //     )
  // }

  onInfoConta() {
    return this.inativarContaService.getInfoConta()
      .subscribe(clientex =>
        this.conta.flagAtivo = clientex[this.indexNumeroConta].flagAtivo,
      );
  }

  inativarConta() {
    const newConta = this.inativarContaFormGroup.getRawValue() as Conta;
    const newClienteLogin = this.inativarContaFormGroup.getRawValue() as ClienteLogin;
    this.inativarContaService
      .inativarConta(this.numeroConta, newConta, newClienteLogin)
      .subscribe(
        () => this.logout(),
        err => console.log(err)
      );
  }

}
