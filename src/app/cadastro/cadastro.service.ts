import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Cliente} from '../Models/Cliente';
import { ClienteLogin } from '../Models/ClienteLogin';
import { Familiares } from '../Models/Familiares';
import { Contato } from '../Models/Contato';
import { Endereco } from '../Models/Endereco';
import { Conta } from '../Models/Conta';
import { Observable } from 'rxjs';
import { Address } from '../Models/Address';



const API = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class CadastroService {

  constructor(private http: HttpClient) { }

  cadastro(cliente: Cliente, familiares: Familiares,
    contato: Contato, endereco: Endereco, clienteLogin: ClienteLogin, conta: Conta) {

    cliente.ClienteLogin = new Array<ClienteLogin>();
    cliente.Familiares = new Array<Familiares>();
    cliente.Contatos = new Array<Contato>();
    cliente.Endereco = new Array<Endereco>();
    cliente.Conta = new Array<Conta>();

    cliente.ClienteLogin.push(clienteLogin);
    cliente.Familiares.push(familiares);
    cliente.Contatos.push(contato);
    cliente.Endereco.push(endereco);
    cliente.Conta.push(conta);

    return this
      .http.post(API + '/api/Clientes', cliente,
        { headers: { 'Content-Type': 'application/json' } })
  }

  buscaCEP(cep: string):Observable<Address>{


    return this.http.get<Address>(`https://viacep.com.br/ws/${cep}/json/`);
    
  }


  }



