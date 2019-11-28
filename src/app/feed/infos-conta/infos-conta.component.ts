import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';
import { InfoContaService } from './Infos-conta.service';

@Component({
  selector: 'app-infos-conta',
  templateUrl: './infos-conta.component.html',
  styleUrls: ['./infos-conta.component.css']
})
export class InfosContaComponent implements OnInit {
  CPFlogado: string;

  nome: string;
  numConta: number;
  indexCPF: number;
  cpfLogado: string;
  // agencia: Cliente[];

  constructor(
    private userService: UserService,
    private infoContaService : InfoContaService,
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
    console.log(this.CPFlogado);
    this.getIndexCPF();
    this.onInfoCliente();
    this.onInfoCC();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  getIndexCPF(){
    return this.infoContaService.getInfoCliente()
      .subscribe(clientex => 
        this.indexCPF = clientex.findIndex(obj => obj.cpf == '11111111111')
        );
  }

  
  onInfoCliente(){
    return this.infoContaService.getInfoCliente()
      .subscribe(clientex => 
        this.nome = clientex[this.indexCPF].nome
        );
    //  error => console.log(error);
  }  
  onInfoCC(){
    return this.infoContaService.getInfoContaCorrente()
      .subscribe(clientex => 
        this.numConta = clientex[this.indexCPF].numConta,
        );
    //  error => console.log(error);
  }
}