import {Observable} from "rxjs/Observable";

export interface CanCompDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
