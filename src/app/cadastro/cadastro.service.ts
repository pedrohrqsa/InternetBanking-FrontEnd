import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente, ClienteLogin, Contato, Endereco, Familiares } from './cadastroCliente';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';


const API = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class CadastroService {

  constructor(private http: HttpClient) { }

  // fileToUpload: File = null;

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

  // handleError(e: any): import("rxjs").ObservableInput<boolean> {
  //   throw new Error('Method not implemented.');
  // }

  // postFile(fileToUpload: File): Observable<boolean> {
  //   // const endpoint = 'your-destination-url';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);

  //   return this.http
  //     .post(API, formData, { headers: { 'Content-Type': 'application/json' } })
  //     .map(() => { return true; })
  //     .catch((e) => this.handleError(e));
  // }
}
