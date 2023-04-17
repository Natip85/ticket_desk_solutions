import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/shared/interfaces/IUserSignup';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  theUser:User = {}
  showNotification = false;
  text = 'Logged in sucessfully!'
  @ViewChild('emailFieldRef') emailField!: ElementRef;

  ngAfterViewInit(): void {
        this.emailField.nativeElement.focus();
    }

  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(200)]
    })
  })

  getFieldControl(field: string): FormControl {
    return this.loginForm.get(field) as FormControl;
  }

  constructor(private api: ApiService, private router: Router, private auth: AuthService){}

  errs={
    status: ''
  }

  onSubmit() {
    if(this.loginForm.invalid){
      return;
    }
    this.api.login(this.loginForm.value).subscribe({
      next: (data) => {
         if (data.token) this.api.setToken(data.token)

           const myUser = JSON.stringify(data.user)

         if (data.user) this.api.setUserInfo(myUser)

         this.theUser = data.user

         this.showNotification = true;
        setTimeout(() => {
          this.showNotification = false;
          this.router.navigate([this.auth.redirectUrl]);
        }, 1000);
      },
      error: (err) => {
        console.log(err.error)
        this.errs = err.error
      }
    })
  }

  notificationClosed(state: boolean) {
        this.showNotification = state;
    }

}
