import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { PicturesModule } from './components/pictures/pictures.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    MaterialModule,
    PicturesModule,
    HttpClientModule,
    AppRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
