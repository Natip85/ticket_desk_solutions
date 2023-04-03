import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { Customer } from 'src/app/shared/interfaces/ICustomer';
@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {
  @Input() sectionTitle = 'Customers'
  customers: Array<Customer> = [];

  addcustomerForm = new FormGroup({
        fName: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        }),
        lName: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100),
                Validators.required
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
        address: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        })
    })

    constructor(private api: ApiService){}

    onSubmit(){
       if (this.addcustomerForm.invalid) {
            return;
        }

        this.api.addCustomer(this.addcustomerForm.value).subscribe({
            next: (data: Customer) => {
                this.addcustomerForm.reset();
                this.getAllCustomers();

                // this.router.navigate(['lecturers']);
                // this.getTasks();
            },
            error: (err) => console.log(err)
        })
    }

    getAllCustomers() {
        this.api.getCustomers().subscribe({
            next: (data: Array<Customer>) => this.customers = data,
            error: (err) => console.log(err)
        })
    }

    ngOnInit(): void {
        this.getAllCustomers();

    }

    onDelete(customer: Customer) {
        if (!customer._id) {
            return;
        }

        var userConfirmed = confirm(`Are you sure you want to remove the following task? \n "${customer.email}"`)

    if(userConfirmed){
        this.api.deleteCustomer(customer._id).subscribe({
            next: (data: Customer) => this.getAllCustomers(),
            error: (err) => console.log(err)
        })
      }
    }

}
