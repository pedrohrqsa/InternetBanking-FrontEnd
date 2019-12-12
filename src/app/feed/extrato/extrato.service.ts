import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacao } from 'src/app/Models/Transacao';

@Injectable({ providedIn: 'root' })

export class ExtratoService {

    url = "http://localhost:5000/";
    private apiExtrato = this.url + "api/Transacao";

    constructor(private http: HttpClient) { }
    
    getInfoExtrato(): Observable<Transacao[]> {
        return this.http.get<Transacao[]>(this.apiExtrato);
    }
}


