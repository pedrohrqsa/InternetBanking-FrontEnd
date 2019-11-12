import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from './user/user.service';
import { environment } from "../../environments/environment";
// import { Token } from './token';

const API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
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
      // httpOptions
    )
      .pipe(tap(res => {
        const authToken = res.body.token; 

        // window.localStorage.setItem('authToken', authToken);

        this.userService.setToken(authToken); 

        console.log(`User ${cpf} authenticated with token ${authToken}`);
        console.log(res);
      }))
  }

  // autenticar(cpf: string, senha: string) {
  //   var x =  this.http.post(API_URL + '/api/token',{cpf,senha}, { observe: 'response' },)
  //     .pipe(
  //       tap(res => {
  //               const authToken = res.headers.get('x-access-token');
  //                console.log(authToken);
  //              })
  //     );
  //     return x;
  // }
}
