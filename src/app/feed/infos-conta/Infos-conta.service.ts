import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente';
import { Conta } from 'src/app/Models/Conta';
import { ContaCorrente } from 'src/app/Models/ContaCorrente';
import { Agencia } from 'src/app/Models/Agencia';

@Injectable({ providedIn: 'root' })
export class InfoContaService {
    
    URL: 'http://localhost:5000/'

    private apiCliente = this.URL + "api/Cliente";
    private apiContaCorrente = this.URL + "api/contaCorrente";

    constructor(private http: HttpClient,
        @Inject(URL)
        private UrlCliente: string,
        private urlContaCorrente: string) { }

    getInfoContaCorrente(): Observable<ContaCorrente[]> {
        return this.http.get<ContaCorrente[]>(this.apiContaCorrente);
    }
    
    getInfoCliente(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.apiCliente);
    }
}


