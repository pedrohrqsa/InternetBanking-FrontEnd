import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Cliente} from '../Models/Cliente';
import { ClienteLogin } from '../Models/ClienteLogin';
import { Familiares } from '../Models/Familiares';
import { Contato } from '../Models/Contato';
import { Endereco } from '../Models/Endereco';

const API = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class CadastroService {

  constructor(private http: HttpClient) { }

  cadastro(cliente: Cliente, familiares: Familiares,
    contato: Contato, endereco: Endereco, clienteLogin: ClienteLogin) {

    cliente.ClienteLogin = new Array<ClienteLogin>();
    cliente.Familiares = new Array<Familiares>();
    cliente.Contato = new Array<Contato>();
    cliente.Endereco = new Array<Endereco>();

    cliente.ClienteLogin.push(clienteLogin);
    cliente.Familiares.push(familiares);
    cliente.Contato.push(contato);
    cliente.Endereco.push(endereco);
    console.log(cliente);

    return this
      .http.post(API + '/api/Clientes', cliente,
        { headers: { 'Content-Type': 'application/json' } })
  }
}