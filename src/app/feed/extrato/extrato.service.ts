import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacao } from 'src/app/Models/Transacao';
import { Conta } from 'src/app/Models/Conta';
import { Cliente } from 'src/app/Models/Cliente';
import { ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class ExtratoService {

    url = "http://localhost:5000/";
    
    private apiCliente = this.url + "api/Clientes";
    private apiConta = this.url + "api/Conta";

    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
    
    getInfoExtrato(conta: string): Observable<Transacao[]> {
        const apiExtrato = this.url + "api/Transacao/" + conta;
        return this.http.get<Transacao[]>(apiExtrato);
    }

    getInfoConta(): Observable<Conta[]> {
        return this.http.get<Conta[]>(this.apiConta);
    }

    getInfoCliente(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.apiCliente);
    }
}