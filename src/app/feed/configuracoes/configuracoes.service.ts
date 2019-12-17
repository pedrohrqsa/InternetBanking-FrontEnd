import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente';
import { Endereco } from 'src/app/Models/Endereco';
import { Contato } from 'src/app/Models/Contato';
import { Familiares } from 'src/app/Models/Familiares';

@Injectable({ providedIn: 'root' })
export class ConfiguracoesService {

    url = "http://localhost:5000/";

    private apiCliente = this.url + "api/Clientes";
    private apiFamiliares = this.url + "api/Familiares";
    private apiContato = this.url + "api/Contato";
    private apiEnderecos = this.url + "api/Enderecos";

    constructor(private http: HttpClient) { }
    
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
