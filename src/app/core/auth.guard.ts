import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})

export class AuthGuard implements CanActivate{

    constructor(
        private userService: UserService,
        private router: Router) {}

    canActivate(
        route: import("@angular/router").ActivatedRouteSnapshot,
        state: import("@angular/router").RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
        if(this.userService.isLogged()){
            this.router.navigate(
                ['feed']
            );
            return false;
        }
        return true;
    }
}