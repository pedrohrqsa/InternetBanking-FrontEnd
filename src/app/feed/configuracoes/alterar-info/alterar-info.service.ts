import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from 'src/app/Models/Cliente';
import { Familiares } from 'src/app/Models/Familiares';
import { Contato } from 'src/app/Models/Contato';
import { Endereco } from 'src/app/Models/Endereco';

@Injectable({
  providedIn: 'root'
})
export class AlterarInfoService {

    url = "http://localhost:5000/api/";

    private apiCliente = this.url + "Clientes";
    private apiFamiliares = this.url + "Familiares";
    private apiContato = this.url + "Contato";
    private apiEnderecos = this.url + "Enderecos";

    constructor(
        private http: HttpClient
    ) { }
    
    getInfoCliente(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.apiCliente);
    }

    getInfoFamiliares(): Observable<Familiares> {
        return this.http.get<Familiares>(this.apiFamiliares);
    }

    getInfoContato(): Observable<Contato[]> {
        return this.http.get<Contato[]>(this.apiContato);
    }

    getInfoEndereco(): Observable<Endereco[]> {
        return this.http.get<Endereco[]>(this.apiEnderecos);
    }
}
