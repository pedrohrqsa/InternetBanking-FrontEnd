import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';

export interface DadosConta{
  nome: string;
  conta: string;
  agencia: string;
}

@Component({
  selector: 'app-infos-conta',
  templateUrl: './infos-conta.component.html',
  styleUrls: ['./infos-conta.component.css']
})
export class InfosContaComponent implements OnInit {
  
  public conta: DadosConta[] = [
    {
      nome: 'Luiz Henrique',
      conta: '0000001-1',
      agencia: '0001'
    }
  ];

  public nome = this.conta[0].nome;
  public conta1 = this.conta[0].conta;
  public agencia = this.conta[0].agencia;

  constructor(private userService: UserService, private router: Router) {}

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

  ngOnInit() {}

  logout(){
    this.userService.logout();
    this.router.navigate(['']);
  }

}