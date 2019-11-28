import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContaCorrente } from 'src/app/Models/ContaCorrente';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SaldoService {
    
    url = "http://localhost:5000/";

    private apiContaCorrente = this.url + "api/contaCorrente";

    constructor(private http: HttpClient) { }

    GetInfoSaldo(): Observable<ContaCorrente[]> {
        return this.http.get<ContaCorrente[]>(this.apiContaCorrente);
    }
}