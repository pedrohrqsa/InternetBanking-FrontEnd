import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ClienteLogin } from 'src/app/Models/ClienteLogin';
import { environment } from 'src/environments/environment';

const API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AlterarSenhaService {

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  url = "http://localhost:5000/api/";

  alterarSenha(cpf: string, senha: ClienteLogin) {

    const apiClienteLogin = '/api/clienteLogin/' + cpf;

    return this
      .http.put(API + apiClienteLogin, senha,
        { headers: { 'Content-Type': 'application/json' } })
  }
}