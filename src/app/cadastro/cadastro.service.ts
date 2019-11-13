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

//         var teste = {
//           "CPF": "47958664818",
//           "RG": "547858887",
//           "ORGAOEMISSOR": "SSP",
//           "DTNASCIMENTO": "1998-11-22",
//           "NOME": "PEDRO",
//           "SOBRENOME": "HENRIQUE",
//           "NACIONALIDADE": "BRASILEIRA",
//           "NATURALIDADE": "CARACAS",
//           "ClienteLogin": [{
//             "CPF": "47958664818",
//             "senha": "TESTE"
//           }],
//           "familiares": [{
//             "NOME_MAE": "Sara",
//             "SOBRENOME_MAE": "Silva",
//             "NOME_PAI": "Lucas",
//             "SOBRENOME_PAI": "Da agresty"
//           }],
//           "contatos": [{
//             "EMAIL": "pedrohenrique34@ig.com",
//             "TEL_RESID": "11 4185-3265",
//             "TEL_CEL": "11 95415-1355"
//           }],
//           "endereco": [{
//             "LOGRADOURO": "Avenida 8",
//             "NUMERO": 75,
//             "COMPLEMENTO": "Casa18",
//             "BAIRRO": "Bela Vista",
//             "CIDADE": "São Paulo",
//             "SIGLA_ESTADO": "SP",
//             "CEP": "06322355"
//           }]
//         };