import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  {path : '' ,redirectTo: 'home', pathMatch: 'full'},
  {path: 'home' , component:HomePageComponent},
  {path: 'students', component:StudentsComponent},
  {path : 'student/:id' , component:StudentDetailsComponent},
  {path: 'create', component:CreateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
