import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {
  signUpForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.initializeForm();

    console.log('signUpForm', this.signUpForm.value);
  }

  initializeForm(): void {
    this.signUpForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  signUp(): void {
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value).subscribe((response) => {
        this.initializeForm();
        console.log('sign up response: ', response);
      }, (error) => {
        console.log('sign up error: ', error);
      });
    }
  }
}
