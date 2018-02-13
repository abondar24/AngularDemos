import {Directive, Input, ViewContainerRef} from "@angular/core";
import {Router, RouterOutlet} from "@angular/router";


@Directive({
  selector: 'tomato-router-outlet'
})
export class RouterOutletDirective extends RouterOutlet {
  parentRouter: Router;

  @Input() protectedPath: string;
  @Input() loginUrl: string;

  //constructor(_viewContainerRef: ViewContainerRef){}
}
