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
  cpf: string;
  indexCPF: number;
  numeroConta: number;
  erro: boolean = false;

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
    this.onInfoCliente();

    this.inativarContaFormGroup = this.formBuilder.group({
      senhaAcesso: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

    return this.infoContaService.getInfoCliente()
      .subscribe(clientex =>
        (this.indexCPF = clientex.findIndex(obj =>
          obj.cpf == getCpf),
          this.onInfoCliente())
      );
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
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

    const newClienteLogin = this.inativarContaFormGroup.getRawValue() as ClienteLogin;
    this.inativarContaService
      .inativarConta(this.cpf, newClienteLogin)
      .subscribe(
        () => this.logout(),
        err => {
          console.log("Erro ao desativar conta");
          this.erro = true;
        }
      );
  }

  reload() {
    alert("Informações alteradas com sucesso!");
    window.location.reload();
  }
}
