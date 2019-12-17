import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Conta } from 'src/app/Models/Conta';
import { HttpClient } from '@angular/common/http';
import { Transacao } from 'src/app/Models/Transacao';
import { environment } from 'src/environments/environment';

const API = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class SaqueService {
    
    API = environment.API_URL;
    private apiConta = this.API + "api/Conta";
    private apiTransacao = this.API + '/api/Transacao';

    constructor(private http: HttpClient) { }

    Saque(transacao: Transacao) {
        return this
            .http.post(this.apiTransacao, transacao,
                { headers: { 'Content-Type': 'application/json' } })
    }

    getInfoConta(): Observable<Conta[]> {
        return this.http.get<Conta[]>(this.apiConta);
    }
}