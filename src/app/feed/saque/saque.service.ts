import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transacao } from 'src/app/Models/Transacao';
import { Observable } from 'rxjs';

const API = this.URL + " api/ ";
// const API = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class SaqueService {


    url = "http://localhost:5000/";

    private apiTransacao = this.url + "api/Transacao";

    constructor(private http: HttpClient) { }



    Saque(transacao: Transacao) {
        return this
        .http.post(this.apiTransacao, transacao,
          { headers: { 'Content-Type': 'application/json' } })
    }

  
    
}