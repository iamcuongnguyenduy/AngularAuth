import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../api.urls';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userLoggedIn$ = new BehaviorSubject<String>('');

  registerUser(registerObj: any) {
    return this.http.post<any>(
      `${apiUrls.userServiceApi}register`,
      registerObj,
      { withCredentials: true }
    );
  }

  loginUser(loginObj: any) {
    return this.http.post<any>(`${apiUrls.userServiceApi}login`, loginObj, {
      withCredentials: true,
    });
  }

  isLoggedIn() {
    return !!localStorage.getItem('user_id');
    //return true if having user id in localstorage, false if not
  }

  getAllUsers() {
    return this.http.get<any>(`${apiUrls.userServiceApi}all`, {
      withCredentials: true,
    });
  }
}
