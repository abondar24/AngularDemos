import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";

import {CanCompDeactivate} from "./CanCompDeactivate";

@Injectable()
export class Guard implements CanActivate, CanDeactivate<CanCompDeactivate>{
  canDeactivate(component: CanCompDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return component.canDeactivate ? component.canDeactivate() : true;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let passPhrase = prompt('Say the magic words');
    return (passPhrase === 'saloman');
  }

}
