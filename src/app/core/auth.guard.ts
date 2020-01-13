import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router) { }

    cpff: string;
    teste = true;
    cpf(cpf: string) {
        this.cpff = cpf;
    }

    canActivate(
        route: import("@angular/router").ActivatedRouteSnapshot,
        state: import("@angular/router").RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.userService.isLogged() == this.teste ) {
            

            this.teste = false; 
            console.log(route.toString().substring(11,12));
        console.log(state.toString().substring(11,12));         
            

        if(route.toString().substring(11,12) == "f"){return true;}
                
        this.router.navigate(["feed/"+this.cpff]);      
             
        }
        
        this.teste = true;
   
        if(route.toString().substring(11,12) == "a"){return true;}else
        if(route.toString().substring(11,12) == "c"){return true;}else
        if(route.toString().substring(11,12) == ""){return true;}
        this.router.navigate([""]);  
        
        
        
    }

    

}

