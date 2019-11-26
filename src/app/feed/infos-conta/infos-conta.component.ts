import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente';

// export interface DadosConta{
//   nome: string;
//   conta: string;
//   agencia: string;
// }

@Component({
  selector: 'app-infos-conta',
  templateUrl: './infos-conta.component.html',
  styleUrls: ['./infos-conta.component.css']
})
export class InfosContaComponent implements OnInit {

  nome: Cliente[];
  // agencia: Cliente[];
  conta: Cliente[];

  //  public conta:DadosConta [] = [
  //   {
  //     nome: 'Luiz Henrique',
  //     conta: '0000001-1',
  //     agencia: '0001'
  //   }
  // ];

  constructor(
    private userService: UserService,
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
    this.InfoContaService.get
    }
}