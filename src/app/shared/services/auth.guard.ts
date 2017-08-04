import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User, Role } from "app/shared/models";

@Injectable()
export class AuthGuard implements CanActivate {

  public userLogged: User;
  public haveRole: boolean = false;

  constructor (private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    this.userLogged = JSON.parse(localStorage.getItem('user')) as User;
    if (this.userLogged != null){
      for (let index = 0; index < this.userLogged.roles.length; index++) {
        const role: Role = this.userLogged.roles[index];
        console.log(role.name);
        if (role.name === 'SUPERVISOR'){
          this.haveRole = true;
          return true;
        }else{
          this.router.navigate(['/home']);
          return false;
        }
      }
    }
    this.router.navigate(['/']);
    return false;
  }

}
