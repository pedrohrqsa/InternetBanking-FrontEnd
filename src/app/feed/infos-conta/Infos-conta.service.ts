import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente';
import { Conta } from 'src/app/Models/Conta';
import { Agencia } from 'src/app/Models/Agencia';

@Injectable({ providedIn: 'root' })
export class InfoContaService {

    url = "http://localhost:5000/";

    private apiCliente = this.url + "api/Clientes";
    private apiConta = this.url + "api/Conta";
    private apiAgencia = this.url + "api/Agencia";

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


