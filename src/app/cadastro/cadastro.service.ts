import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Cliente, Endereco, Contato, Familiares, ClienteLogin } from './cadastroCliente';

const API = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class CadastroService {
  constructor(private http: HttpClient) { }

  cadastro(cliente: Cliente, familiares: Familiares,
    contato: Contato, endereco: Endereco, clienteLogin: ClienteLogin) {

    cliente.ClienteLogin = new Array<ClienteLogin>();
    cliente.Familiares = new Array<Familiares>();
    cliente.Contatos = new Array<Contato>();
    cliente.Endereco = new Array<Endereco>();

    cliente.ClienteLogin.push(clienteLogin);
    cliente.Familiares.push(familiares);
    cliente.Contatos.push(contato);
    cliente.Endereco.push(endereco);
    console.log(cliente);

    return this
      .http.post(API + '/api/Clientes', cliente,
        { headers: { 'Content-Type': 'application/json' } })
  }
}
