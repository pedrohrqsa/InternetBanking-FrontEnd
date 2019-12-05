import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transacao } from 'src/app/Models/Transacao';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const API = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class SaqueService {  

    
    constructor(private http: HttpClient) { }



    Saque(transacao: Transacao) {

        return this
        .http.post(API + '/api/Transacao', transacao,
          { headers: { 'Content-Type': 'application/json' } })
    }

  
    
}