import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Employee } from 'src/app/shared/interfaces/IEmployee';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent implements OnInit {

  sectionTitle = 'Employees'
  sectionIcon = 'bi bi-headset'

  employees: Array<Employee> = [];

  constructor(private api: ApiService, activatedRoute: ActivatedRoute){

    let employeeObservable:Observable<Array<Employee>>

    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        employeeObservable = this.api.getAllEmployeesBySearchTerm(params.searchTerm);
      else
     employeeObservable = api.getEmployees()

      employeeObservable.subscribe((serverEmployees)=>{

    this.employees = serverEmployees

   })
  })
  }

  getAllEmployees(){
    return this.api.getEmployees()
  }

  ngOnInit(): void {
    this.getAllEmployees()
  }
}
