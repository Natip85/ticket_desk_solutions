import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

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

  constructor(private api: ApiService, private router: Router){}


  errs={
    status: ''
  }

  onSubmit() {
    if(this.loginForm.invalid){
      return;
    }

    this.api.login(this.loginForm.value).subscribe({
      next: (data) => {
        this.router.navigate(['portalHome']);
      },
      error: (err) => {
        console.log(err.error)
        this.errs = err.error

      }
    })
  }

}
