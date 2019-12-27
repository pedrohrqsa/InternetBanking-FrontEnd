import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { ClienteLogin } from 'src/app/Models/ClienteLogin';
import { Observable } from 'rxjs';

const API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AlterarSenhaService {

  url = "http://localhost:5000/api/";

  private apiClienteLogin = this.url + "ClienteLogin/";

  constructor(
    private http: HttpClient
  ) { }

  getInfoClienteLogin(): Observable<ClienteLogin[]> {
    return this.http.get<ClienteLogin[]>(this.apiClienteLogin);
  }

  alterarSenha(senha: string, cpf: string, clienteLogin: ClienteLogin) {
    const apiClienteLogin = '/api/ClienteLogin/' + cpf;
    console.log(clienteLogin);
    return this
      .http.put(API + apiClienteLogin, clienteLogin,
        { headers: { 'Content-Type': 'application/json' } })
  }
}
