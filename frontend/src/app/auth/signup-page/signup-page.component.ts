import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements AfterViewInit{

  @ViewChild('nameFieldRef') nameField!: ElementRef;

  ngAfterViewInit(): void {
        this.nameField.nativeElement.focus();
    }


  signupForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2),Validators.maxLength(100)]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(200)]
    }),
    confirm_password: new FormControl('', {
      validators: [Validators.required]
    })
  })

  getFieldControl(field: string): FormControl {
    return this.signupForm.get(field) as FormControl;
  }

  constructor(private api: ApiService, private router: Router){}


  errs={
    message: ''
  }

  onSubmit() {
    if(this.signupForm.invalid){
      return;
    }

    this.api.signup(this.signupForm.value).subscribe({
      next: (data) => {

        this.router.navigate(['login']);
      },
      error: (err) => {
        console.log(err.error)
        this.errs = err.error

      }
    })
  }

}
