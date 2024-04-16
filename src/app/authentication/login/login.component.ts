import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    const user = JSON.parse(JSON.stringify(localStorage.getItem('user')));

    if (user) {
      this.router.navigate(['']);
    } else {
      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          // Navigate to the home page or a dashboard after successful login
          console.log('login response: ', response);
          if (response?.data?.token) {
            localStorage.setItem('user', response.data);
            localStorage.setItem('authToken', response?.data?.token);
          }

          this.router.navigate(['']);
        },
        (error) => {
          console.log('login error: ', error);
          // Handle login error (display error message, clear form, etc.)
        }
      );
    }
  }
}
