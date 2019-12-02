import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente';
import { ContaCorrente } from 'src/app/Models/ContaCorrente';
import { Agencia } from 'src/app/Models/Agencia';

@Injectable({ providedIn: 'root' })
export class InfoContaService {

    url = "http://localhost:5000/";

    cpf: string;
    private apiCliente = this.url + "api/Clientes";
    private apiContaCorrente = this.url + "api/contaCorrente";
    // private apiAgencia = this.url + "api/agencia";

    constructor(private http: HttpClient) { }


    getInfoCliente(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.apiCliente);
    }

    getInfoContaCorrente(): Observable<ContaCorrente[]> {
        return this.http.get<ContaCorrente[]>(this.apiContaCorrente);
    }

    // getInfoAgencia(): Observable<Agencia[]> {
    //     return this.http.get<Agencia[]>(this.apiAgencia);
    // }
}


