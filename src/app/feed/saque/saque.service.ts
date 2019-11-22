import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = this.URL + " api/ ";
// const API = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class SaqueService {

    constructor(private http: HttpClient) { }

    //SUBTRAI O VALOR DO SALDO
    Saque( /*PARAMETROS QUE SERACAO NECESSARIOS PARA ALTERACAO DO VALOR*/) {
        /*
         obj.saque/metodo.put(saque); 
         console.log(saque);
        */
        return this
            .http.put(API + '/api/ContaCorrente', this.Saque,
                { headers: { 'Content-Type': 'application/json' } })
    }
}