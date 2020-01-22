import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente';
import { Conta } from 'src/app/Models/Conta';
import { Agencia } from 'src/app/Models/Agencia';

@Injectable({ providedIn: 'root' })
export class InfoContaService {

    url = "http://localhost:5000/api/";

    private apiCliente = this.url + "Clientes";
    private apiConta = this.url + "Conta";
    private apiAgencia = this.url + "Agencia";

    constructor(private http: HttpClient) { }
    
    getInfoConta(): Observable<Conta[]> {
        return this.http.get<Conta[]>(this.apiConta);
    }

    getInfoCliente(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.apiCliente);
    }

    getInfoAgencia(): Observable<Agencia[]> {
        return this.http.get<Agencia[]>(this.apiAgencia);
    }
}