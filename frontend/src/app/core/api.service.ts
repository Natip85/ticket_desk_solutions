import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/interfaces/IUserSignup';
import { BASE_URL, USER_LOGIN_URL, USER_REGISTER_URL} from '../shared/constants/urls'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

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
}
