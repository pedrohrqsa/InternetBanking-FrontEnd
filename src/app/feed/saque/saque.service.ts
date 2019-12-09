import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transacao } from 'src/app/Models/Transacao';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conta } from 'src/app/Models/Conta';


const API = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class SaqueService { 
    API = environment.API_URL;

    private apiConta = this.API + "api/Conta";
    private apiTransacao = this.API + '/api/Transacao'; 
 
    constructor(private http: HttpClient) { }

    //ADC VALOR AO SALDO
    Saque( transacao: Transacao ) {
        console.log("passou aqui");
        console.log(transacao);
        return this
            .http.post(this.apiTransacao, transacao,
            { headers: { 'Content-Type': 'application/json' } })
    }

    getInfoConta(): Observable<Conta[]>{
        return this.http.get<Conta[]>(this.apiConta);
    }

}