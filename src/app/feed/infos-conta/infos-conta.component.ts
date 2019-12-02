import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { InfoContaService } from './Infos-conta.service';
import { UserService } from 'src/app/core/user/user.service';
import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infos-conta',
  templateUrl: './infos-conta.component.html',
  styleUrls: ['./infos-conta.component.css']
})
export class InfosContaComponent implements OnInit {

  nome: string;
  numConta: number;
  indexCPF: number;
  // agencia: Cliente[];

  constructor(
    private userService: UserService,
    private infoContaService: InfoContaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

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
    // console.log(this.cpf);
    this.getIndexCPF();
    this.onInfoCliente();
    this.onInfoCC();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  // public recebeCpf(RespFilho) {
  //   console.log("A resposta é: ", RespFilho);
  // }

  getIndexCPF() {

    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

    return this.infoContaService.getInfoCliente()
      .subscribe(clientex =>
        console.log(getCpf,
          this.indexCPF = clientex.findIndex(obj =>
            obj.cpf == getCpf))
      );
  }

  onInfoCliente() {
    return this.infoContaService.getInfoCliente()
      .subscribe(clientex =>
        this.nome = clientex[this.indexCPF].nome
      );
  }

  onInfoCC() {
    return this.infoContaService.getInfoContaCorrente()
      .subscribe(clientex =>
        this.numConta = clientex[this.indexCPF].numConta,
      );
  }
}