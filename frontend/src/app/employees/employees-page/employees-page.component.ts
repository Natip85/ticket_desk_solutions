import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Employee } from 'src/app/shared/interfaces/IEmployee';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent {
  sectionTitle = 'Employees'
  sectionIcon = 'bi bi-headset'

  employees: Array<Employee> = [];

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

    onSubmit(){
       if (this.addEmployeeForm.invalid) {
            return;
        }

        this.api.addEmployee(this.addEmployeeForm.value).subscribe({
            next: (data: Employee) => {
                this.addEmployeeForm.reset();
                this.getAllEmployees();

                // this.router.navigate(['lecturers']);
                // this.getTasks();
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

    ngOnInit(): void {
        this.getAllEmployees();

    }

}
