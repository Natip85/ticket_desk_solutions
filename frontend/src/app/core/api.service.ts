import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/interfaces/IUserSignup';
import { ADD_CUSTOMER_URL, BASE_URL, EMPLOYEES_URL, EMPLOYEE_BY_SEARCH_URL, USER_LOGIN_URL, USER_REGISTER_URL} from '../shared/constants/urls';
import { Customer } from '../shared/interfaces/ICustomer';
import { Employee } from '../shared/interfaces/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GET<DynamicType>(endpoint: string): Observable<DynamicType> {
        return this.http.get<DynamicType>(
            `${BASE_URL}${endpoint}`,
            {
                headers: {
                    // 'x-auth-token': this.getToken()
                }
            }
        )
    }

  POST<DynamicType>(endpoint: string, data: DynamicType): Observable<DynamicType> {
    return this.http.post<DynamicType>(
      `${BASE_URL}${endpoint}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          // 'x-auth-token': this.getToken()
        }
      }
      )
  }

  signup(user: User): Observable<User> {
        return this.POST<User>(USER_REGISTER_URL, user);
    }

  login(user: User): Observable<User> {
    return this.POST<User>(USER_LOGIN_URL, user);
  }

  getCustomers(): Observable<Array<Customer>> {
    return this.GET<Array<Customer>>(ADD_CUSTOMER_URL);
  }

  getOneCustomer(id: string): Observable<Customer> {
        return this.GET<Customer>(`${ADD_CUSTOMER_URL}/${id}`);
    }

  addCustomer(customer: Customer): Observable<Customer> {
        return this.POST<Customer>(ADD_CUSTOMER_URL, customer);
    }


    deleteCustomer(id: string): Observable<Customer> {
        return this.http.delete<Customer>(
            `${BASE_URL}${ADD_CUSTOMER_URL}/${id}`,
            {
                headers: {
                    // 'x-auth-token': this.getToken()
                }
            }
        )
    }

    updateCustomer(id: string, customer: Customer): Observable<Customer> {
        return this.http.put<Customer>(
            `${BASE_URL}${ADD_CUSTOMER_URL}/${id}`,
            customer,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // 'x-auth-token': this.getToken()
                }
            }
        )
    }

    getEmployees(): Observable<Array<Employee>> {
    return this.GET<Array<Employee>>(EMPLOYEES_URL);
  }

    getAllEmployeesBySearchTerm(searchTerm: string){
    return this.http.get<Array<Employee>>(EMPLOYEE_BY_SEARCH_URL + searchTerm);
  }

  addEmployee(employee: Employee): Observable<Employee> {
        return this.POST<Employee>(EMPLOYEES_URL, employee);
  }

}
