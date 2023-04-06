import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Employee } from 'src/app/shared/interfaces/IEmployee';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent implements OnInit  {
  sectionTitle = 'Employees'
  sectionIcon = 'bi bi-headset'
  employees: Array<Employee> = [];
  showNotification = false;
  text = 'Employee sucessfully added!'

  addEmployeeForm = new FormGroup({
        name: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        }),
        email: new FormControl('', {
            validators: [
                Validators.email,
                Validators.required
            ]
        }),
        phone: new FormControl('', {
            validators: [
                Validators.minLength(6),
                Validators.maxLength(20)
            ]
        }),
        bDay: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        })
    })



    constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getAllEmployees()
  }

    onSubmit(){
       if (this.addEmployeeForm.invalid) {
            return;
        }

        this.api.addEmployee(this.addEmployeeForm.value).subscribe({
            next: (data: Employee) => {

                this.getAllEmployees();

                 this.showNotification = true;

                  setTimeout(() => {
                    this.showNotification = false;
                  }, 3000);

                  this.addEmployeeForm.reset();
            },
            error: (err) => console.log(err)
        })
    }

    getAllEmployees() {
        this.api.getEmployees().subscribe({
            next: (data: Array<Employee>) => this.employees = data,
            error: (err) => console.log(err)
        })
    }



    notificationClosed(state: boolean) {
        this.showNotification = state;
    }

}
