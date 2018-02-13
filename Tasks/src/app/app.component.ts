import {Component} from "@angular/core";
import {AuthService} from "./services/authservice";
import {Router} from "@angular/router";

@Component({
  selector: 'tomato-app',
  templateUrl: `./app.component.html`
})
export default class AppComponent {

  userIsLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router){

    this.authService.userIsLoggedIn.subscribe(isLoggedIn =>{
      this.userIsLoggedIn = isLoggedIn;
    });
  }

  logout($event): void{
    $event.preventDefault();

    this.authService.logout().then(success=>{
      if (success){
       this.router.navigate(['/']);
        }
      });
  }
}
