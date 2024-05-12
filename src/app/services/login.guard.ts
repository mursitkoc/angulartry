import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn,  Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountServiceService } from './account-service.service';
import { Observable } from 'rxjs';


// @Injectable()
// export class loginGuard implements CanActivateFn {
//   constructor(
//     private accountService: AccountServiceService,
//     private router: Router
//   ) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     let logged = this.accountService.isLoggedIn();
//     if (logged) {
//       return true;
//     }
//     // Redirect to the login page
//     window.alert("You don't have permission to view this page");
//     this.router.navigate(['/login']);
//     return false;
//   };
// }

export const loginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> 
  | boolean 
  | UrlTree=> {

  return inject(AccountServiceService).isLoggedIn()
    ? true
    : inject(Router).navigate(['login']);

};