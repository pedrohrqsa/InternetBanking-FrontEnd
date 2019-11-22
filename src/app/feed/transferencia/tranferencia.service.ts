import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = this.URL + " api/Transferencia";
// const API = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class TransferenciaService {

    constructor(private http: HttpClient) { }

    Transferencia( /*PARAMETROS QUE SERACAO NECESSARIOS PARA ALTERACAO DO VALOR*/) {
        /*
         obj.transferencia/metodo.put(transferencia); 
         console.log(transferencia);
        */

        return this
            .http.put(API + '/api/Transferencia', this.Transferencia,
                { headers: { 'Content-Type': 'application/json' } })
    }
}