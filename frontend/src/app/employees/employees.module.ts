import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { SharedModule } from '../shared/shared.module';
import { SearchModule } from '../search/search.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmployeesPageComponent,
    EmployeeDisplayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchModule,
    ReactiveFormsModule,
    RouterModule,
    RouterLink
  ]
})
export class EmployeesModule { }
