import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from 'src/app/Models/Cliente';
import { Conta } from 'src/app/Models/Conta';

@Injectable({
  providedIn: 'root'
})
export class InativarContaService {

  url = "http://localhost:5000/api/";

  private apiCliente = this.url + "Cliente";
  private apiConta = this.url + "Conta";

  constructor(
    private http: HttpClient
  ) { }

  getInfoCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiCliente);
  }

  getInfoConta(): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.apiConta);
  }

}
