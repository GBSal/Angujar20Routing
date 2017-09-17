
import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, CanActivateChild, Route } from "@angular/router";
import { AuthService } from "./auth.service";



@Injectable()
export class AuthGuard implements CanActivate  , CanActivateChild , CanLoad
{
    
    constructor(
            private router:Router,
            private authService:AuthService        
    ){}
    
    canActivate(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot 
        
    ):boolean {
    console.log("In CanActivate route.");
    return this.checkLoggedIn(state.url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('In canActivateChild: ' + state.url);
        return this.checkLoggedIn(state.url);
    }

    canLoad(route: Route): boolean {
        console.log('In canLoad: ' + route.path);
        return this.checkLoggedIn(route.path);
    }

   
   checkLoggedIn(url:string):boolean{
     
    if(this.authService.isLoggedIn())
        return true;

    this.authService.redirectUrl = url;
    this.router.navigate(['/login'])
    return false;

   }
}