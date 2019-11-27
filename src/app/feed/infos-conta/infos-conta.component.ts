import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente';
import { ContaCorrente } from 'src/app/Models/ContaCorrente';
import { InfoContaService } from './Infos-conta.service';

@Component({
  selector: 'app-infos-conta',
  templateUrl: './infos-conta.component.html',
  styleUrls: ['./infos-conta.component.css']
})
export class InfosContaComponent implements OnInit {

  nome: Cliente[];
  numConta: ContaCorrente[];
  // agencia: Cliente[];
  saldo: ContaCorrente[];

  constructor(
    private userService: UserService,
    private infoContaService : InfoContaService,
    private router: Router) { }

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

  ngOnInit() { }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }  
  
  onFunction() {
     this.infoContaService.getInfoCliente()
     .subscribe( cliente => this.nome = cliente),
     error => console.log(error); 
    }
}