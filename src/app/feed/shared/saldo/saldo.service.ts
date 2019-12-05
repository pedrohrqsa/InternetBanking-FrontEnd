import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conta } from 'src/app/Models/Conta';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SaldoService {
    
    url = "http://localhost:5000/";

    private apiConta = this.url + "api/conta";

    constructor(private http: HttpClient) { }

    GetInfoSaldo(): Observable<Conta[]> {
        return this.http.get<Conta[]>(this.apiConta);
    }
}