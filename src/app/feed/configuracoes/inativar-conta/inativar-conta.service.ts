import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Conta } from 'src/app/Models/Conta';
import { ClienteLogin } from 'src/app/Models/ClienteLogin';

const API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class InativarContaService {
  
  private apiConta = API + "/api/Conta/";
  private apiClienteLogin = API + "/api/clienteLogin/";

  constructor(
    private http: HttpClient
  ) { }

  getInfoConta(): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.apiConta);
  }

  getInfoLogin(): Observable<ClienteLogin[]> {
    return this.http.get<ClienteLogin[]>(this.apiClienteLogin);
  }

  inativarConta(cpf: string, conta: ClienteLogin) {
    return this
      .http.put(this.apiConta + cpf, conta,
        { headers: { 'Content-Type': 'application/json' } })
  }
}
