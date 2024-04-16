import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material.module';
import { SignUpComponent } from './sign-up/sign-up.component';

const components = [ LoginComponent, SignUpComponent ];

@NgModule({
  imports: [
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...components
  ],
  declarations: [
    ...components
  ],
})

export class AuthenticationModule {}
