import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente';
import { Conta } from 'src/app/Models/Conta';

@Injectable()
export class InfoContaService {
    
    private apiCliente = this.UrlCliente + "api/Cliente";
    private apiConta = this.urlConta + "api/Cliente";
    
    constructor(private http: HttpClient,
         @Inject('URL')
          private UrlCliente: string,
          private urlConta: string) { }

    GetInfoCliente(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.apiCliente);
    }
    GetInfoConta(): Observable<Conta[]> {
        return this.http.get<Conta[]>(this.apiConta);
    }
}