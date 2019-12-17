import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transacao } from 'src/app/Models/Transacao';
import { environment } from 'src/environments/environment';
import { Conta } from 'src/app/Models/Conta';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DepositoService {
    API = environment.API_URL;

    private apiConta = this.API + "api/Conta";
    private apiTransacao = this.API + '/api/Transacao';

    constructor(private http: HttpClient) { }

    Deposito(transacao: Transacao) {
        return this
            .http.post(this.apiTransacao, transacao,
                { headers: { 'Content-Type': 'application/json' } })
    }

    getInfoConta(): Observable<Conta[]> {
        return this.http.get<Conta[]>(this.apiConta);
    }
}