import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ClienteLogin } from 'src/app/Models/ClienteLogin';

const API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AlterarSenhaService {

  private apiClienteLogin = API + "/api/ClienteLogin/";

  constructor(
    private http: HttpClient
  ) { }

  getInfoClienteLogin(): Observable<ClienteLogin[]> {
    return this.http.get<ClienteLogin[]>(this.apiClienteLogin);
  }

  alterarSenha(cpf: string, clienteLogin: ClienteLogin) {
    return this
      .http.put(this.apiClienteLogin + cpf, clienteLogin,
        { headers: { 'Content-Type': 'application/json' } })
  }
}
