import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { PortalHomeComponent } from './portal/portal-home/portal-home.component';
import { CustomersPageComponent } from './customers/customers-page/customers-page.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { SelectedCustomerComponent } from './customers/selected-customer/selected-customer.component';
import { EmployeesPageComponent } from './employees/employees-page/employees-page.component';
import { EmployeeDisplayComponent } from './employees/employee-display/employee-display.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'portalHome', component: PortalHomeComponent},
  {path: 'customers', component: CustomersPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  { path: 'edit-customer/:id', component: EditCustomerComponent },
  { path: 'selectedCustomer/:id', component: SelectedCustomerComponent },
  { path: 'employees', component: EmployeesPageComponent },
  {path: 'search/:searchTerm', component: EmployeeDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
