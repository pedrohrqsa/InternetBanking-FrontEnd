import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = this.URL + " api/ContaCorrente";
// const API = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class ExtratoService {

    constructor(private http: HttpClient) { }

    //ADC VALOR AO SALDO
    Deposito( /*PARAMETROS QUE SERACAO NECESSARIOS PARA ALTERACAO DO VALOR ex: saldo*/ ) {
        
        /*
         obj.deposito/metodo.put(deposito); 
         console.log(deposito);
        */

        return this
            .http.put(API + '/api/ContaCorrente', this.Deposito,
                { headers: { 'Content-Type': 'application/json' } })
    }
}