import {Component, Inject} from "@angular/core";
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/authservice";

@Component({
  selector: 'tomato-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
   notValidCredentials: boolean = false;
   loginForm:FormGroup;
   showUsernameHint: boolean = false;

   constructor(@Inject(FormBuilder)formBuilder: FormBuilder,private router:Router,
               private authService: AuthService){

     this.loginForm = formBuilder.group({
       username:['',Validators.compose([Validators.required, this.emailValidator])],
       password:['',Validators.required]
     });

     const username = this.loginForm.controls['username'];
     username.valueChanges.subscribe(value => {
       this.showUsernameHint = (username.dirty && value.indexOf('@')<0)
     });
   }

   authenticate(){
     let credentials: any = this.loginForm.value;
     console.log(this.loginForm.value);
     this.notValidCredentials = !this.loginForm.valid && this.loginForm.dirty;

     this.authService.login(credentials).then(success=>{
       if (success){
         this.router.navigate(['/']);
       } else {
         this.notValidCredentials=true;
       }

     });

   }

   private emailValidator(): ValidatorFn{
      return (control: AbstractControl): {[key: string]: any}=> {
        if (!/(.+)@(.+){2,}\.(.+){2,}/.test(control.value)) {
          return {
            'emailNotValid': true
          };
        }
        return null;
      }
   }
}

