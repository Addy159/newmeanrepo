import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentsComponent } from './components/students/students.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StudentDetailsComponent,
    CreateStudentComponent,
    NavbarComponent,
    FooterComponent,
    StudentsComponent,
    AccountDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
