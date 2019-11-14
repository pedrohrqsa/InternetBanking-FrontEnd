import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserService } from './user/user.service';
import { environment } from "../../environments/environment";

const API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  autenticar(cpf: string, senha: string) { 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post(API + '/api/token',
      { cpf, senha },
      { observe: 'response' },
    )
      .pipe(tap((res: any) => {
        const authToken = res.body.token; 

        this.userService.setToken(authToken); 

        console.log(`User ${cpf} authenticated with token ${authToken}`);
        console.log(res);
      }))
  }
}
