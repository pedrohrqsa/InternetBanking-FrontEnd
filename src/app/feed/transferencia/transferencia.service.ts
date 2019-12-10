import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transacao } from 'src/app/Models/Transacao';
import { environment } from 'src/environments/environment';
import { Conta } from 'src/app/Models/Conta';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransferenciaService {

    API = environment.API_URL;

    private apiConta = this.API + "api/Conta";
    private apiTransacao = this.API + '/api/Transacao';

    constructor(private http: HttpClient) { }
    
    Transferecia(transacao3: Transacao) {
        return this
            .http.post(this.apiTransacao, transacao3,
                { headers: { 'Content-Type': 'application/json' } })
    }

    getInfoConta(): Observable<Conta[]> {
        return this.http.get<Conta[]>(this.apiConta);
    }
}