import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Cliente } from 'src/app/Models/Cliente';
import { Familiares } from 'src/app/Models/Familiares';
import { Contato } from 'src/app/Models/Contato';
import { Endereco } from 'src/app/Models/Endereco';

const API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AlterarInfoService {

  url = "http://localhost:5000/api/";

  private apiCliente = this.url + "Clientes/";
  private apiFamiliares = this.url + "Familiares";
  private apiContato = this.url + "Contato";
  private apiEnderecos = this.url + "Enderecos";

  constructor(
    private http: HttpClient
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
  alterarInfoPerfil(cpf: string, perfil: Cliente) {
    const apiClientes = '/api/Clientes/' + cpf;
    return this
      .http.put(API + apiClientes, perfil,
        { headers: { 'Content-Type': 'application/json' } })
  }

  alterarInfoFamiliares(cpf: string, familiares: Familiares) {
    const apiFamiliares = '/api/Familiares/' + cpf;
    return this
      .http.put(API + apiFamiliares, familiares,
        { headers: { 'Content-Type': 'application/json' } })
  }

  alterarInfoContato(cpf: string, contato: Contato) {
    const apiContato = '/api/Contato/' + cpf;
    return this
      .http.put(API + apiContato, contato,
        { headers: { 'Content-Type': 'application/json' } })
  }

  alterarInfoEndereco(cpf: string, endereco: Endereco) {
    const apiEndereco = '/api/Enderecos/' + cpf;
    return this
      .http.put(API + apiEndereco, endereco,
        { headers: { 'Content-Type': 'application/json' } })
  }
}
