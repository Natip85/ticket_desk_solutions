import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Customer } from 'src/app/shared/interfaces/ICustomer';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.css']
})
export class DashboardInfoComponent implements OnInit {

  customers: Array<Customer> = [];

  constructor(private api: ApiService){}

  getAllCustomers(){
    this.api.getCustomers().subscribe({
            next: (data: Array<Customer>) => this.customers = data,
            error: (err) => console.log(err)
        })
  }

  ngOnInit(): void {
    this.getAllCustomers()
  }


}
