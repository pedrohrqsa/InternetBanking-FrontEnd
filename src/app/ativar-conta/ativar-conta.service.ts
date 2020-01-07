import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from '../Models/StatusConta';
const API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AtivarContaService {

  private apiStatus = API + "/api/conta/ativar";
  constructor(private http: HttpClient) { }

  ativarConta(cpf: string, status: Status) {
    return this
      .http.put(this.apiStatus + cpf, status,
        { headers: { 'Content-Type': 'application/json' } })
  }
}