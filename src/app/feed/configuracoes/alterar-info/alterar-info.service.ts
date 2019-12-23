import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Cliente } from 'src/app/Models/Cliente';
import { Familiares } from 'src/app/Models/Familiares';
import { Contato } from 'src/app/Models/Contato';
import { Endereco } from 'src/app/Models/Endereco';
import { ActivatedRoute } from '@angular/router';

const API = environment.API_URL;

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
        private http: HttpClient,
        private activatedRoute: ActivatedRoute
    ) { }

    // MÉTODOS QUE RETORNAM AS INFORMAÇÕES
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

    // MÉTODOS QUE ALTERAM AS INFORMAÇÕES
    alterarInfoPerfil(perfil: Cliente) {
        return this
          .http.put(API + '/api/Clientes/' + perfil.cpf, perfil,
            { headers: { 'Content-Type': 'application/json' } })
    }
    
    alterarInfoFamiliares(perfil: Cliente, familiares: Familiares) {

        perfil.Familiares = new Array<Familiares>();

        perfil.Familiares.push(familiares);

        return this
          .http.put(API + '/api/Familiares', perfil,
            { headers: { 'Content-Type': 'application/json' } })
    }

    alterarInfoContato(perfil: Cliente, contato: Contato) {
        
        perfil.Contatos = new Array<Contato>();

        perfil.Contatos.push(contato);
        
        return this
          .http.put(API + '/api/Contato/' + perfil.cpf, contato,
            { headers: { 'Content-Type': 'application/json' } })
    }

    alterarInfoEndereco(perfil: Cliente, endereco: Endereco) {
        
        perfil.Endereco = new Array<Endereco>();

        perfil.Endereco.push(endereco);
        
        return this
          .http.put(API + '/api/Enderecos', perfil,
            { headers: { 'Content-Type': 'application/json' } })
    }
}
