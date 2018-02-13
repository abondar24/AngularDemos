import {EventEmitter, Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {CanCompDeactivate} from "../tasks/CanCompDeactivate";
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthService implements CanActivate, CanDeactivate<CanCompDeactivate>{


  userIsLoggedIn: EventEmitter<boolean>;

  constructor(){
    this.userIsLoggedIn =new EventEmitter();


  }

  login({username,password}): Promise<boolean>{
    return new Promise(resolve => {
      let validCredentials: boolean=false;

      if (username === 'abondar@mail.com' && password==='password'){
                 validCredentials =true;
                 window.sessionStorage.setItem('token','eyJhbGciOi');
      }

      this.userIsLoggedIn.emit(validCredentials);
      resolve(validCredentials);
    });
  }

  logout(): Promise<boolean>{
    return new Promise(resolve => {
      window.sessionStorage.removeItem('token');
      this.userIsLoggedIn.emit(false);
      resolve(true);
    });
  }

  static isAuthorized(): boolean{
    return !!window.sessionStorage.getItem('token');
  }

  canDeactivate(component: CanCompDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return component.canDeactivate ? component.canDeactivate() : true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!AuthService.isAuthorized()){
    alert("You aren't authorized to add tasks");
    }
    return AuthService.isAuthorized();
  }


}
