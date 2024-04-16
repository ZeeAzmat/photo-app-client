// authentication.service.ts
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { API_URL } from '../shared/constants';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  signUp(signUpForm: any): Observable<any> {
    return this.http.post(`${API_URL}auth/register`, signUpForm);
  }

  login(loginForm: any): Observable<any> {
    return this.http.post(`${API_URL}auth/login`, loginForm);
  }

  logout(): Observable<any> {
    // Implement logout logic here
    return this.http.delete('http://localhost:3000/api/users/logout');
  }

  isLoggedIn(): boolean {
    // Implement check for user authentication status
    return false; // Placeholder, replace with actual implementation
  }
}
