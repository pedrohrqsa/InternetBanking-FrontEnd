import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})

// export class AuthGuard implements CanActivate{

//     canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
//         if(this.userService.isLogged()){
//             this.router.navigate(['feed']);
//             return false;
//         }
//         return true;
//     }
//     constructor(private userService: UserService, private router: Router){}
// }

export class LoginGuard implements CanActivate{

    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
        if(this.userService.isLogged()){
            return true;
        }
        this.router.navigate(['']);
        return false;
    }
    constructor(private userService: UserService, private router: Router){}
}

// export class NotLoggedGuard implements CanActivate {
//     canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
//         console.log("nao logado");
//         this.router.navigate(['']);
//         return this.userService.isLogged();
//     }

//     constructor(private userService: UserService, private router: Router) { }
// }