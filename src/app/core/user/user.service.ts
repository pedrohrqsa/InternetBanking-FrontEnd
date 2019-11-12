import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);

    constructor(private tokenService: TokenService){
        this.tokenService.hasToken() && this.decode();
    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decode();
    }

    getUser(){
        return this.userSubject.asObservable();
    }

    private decode(){
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;
        this.userSubject.next(user);
    }

    logout(){
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged(){
        return this.tokenService.hasToken();
    }
}