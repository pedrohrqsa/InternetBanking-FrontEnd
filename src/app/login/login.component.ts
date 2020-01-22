import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service';
import { AuthGuard } from '../core/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  desativado: boolean = false;

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  constructor(
    private formBuilder: FormBuilder,
    private autorizacao: AuthService,
    private auth: AuthGuard,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      cpf: ['', [Validators.required, Validators.maxLength(11)]],
      senhaAcesso: ['', [Validators.required]]
    })
  }

  login() {
    const cpfDigitado = this.loginForm.get('cpf').value;
    const senha = this.loginForm.get('senhaAcesso').value;
    this.auth.cpf(cpfDigitado);
    this.autorizacao.autenticar(cpfDigitado, senha)
      .subscribe(() => this.router.navigate(['feed/', cpfDigitado]),
        err => {
          this.loginForm.reset();
          this.desativado = true;
        });
  }
}
