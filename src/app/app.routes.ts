import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LoginComponent } from './authentication/login/login.component';
import { AddPictureComponent } from './components/pictures/add-picture/add-picture.component';
import { EditPictureComponent } from './components/pictures/edit-picture/edit-picture.component';
import { ShowPictureComponent } from './components/pictures/show-picture/show-picture.component';

export const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-picture', component: AddPictureComponent },
  { path: ':id', component: ShowPictureComponent },
  { path: 'edit-picture/:id', component: EditPictureComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/login' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
