import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Conta } from 'src/app/Models/Conta';

const API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class InativarContaService {
  
  private apiConta = API + "/api/Conta/";

  constructor(
    private http: HttpClient
  ) { }

  getInfoConta(): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.apiConta);
  }

  inativarConta(numeroConta: number, conta: Conta) {
    return this
      .http.put(this.apiConta + numeroConta, conta,
        { headers: { 'Content-Type': 'application/json' } })
  }

}
