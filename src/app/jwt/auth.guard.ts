import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import  {  Observable  }  from  'rxjs';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  userLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.user().subscribe(res => {
      if(res) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    })
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userLoggedIn) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
