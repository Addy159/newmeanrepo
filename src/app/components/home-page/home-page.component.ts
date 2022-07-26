import { Component, OnInit } from '@angular/core';
import { GetStudentsInfoService } from 'src/app/services/get-students-info.service';
import { StudentInterface } from 'src/app/interfaces/student-interface';
import { ParamMap , ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  students: StudentInterface[] = []

  id!:string

  studentForm = this.fb.group({
    fname:[''],
    lname:[''],
    email:[''],
    telephone:[''],
  })


  constructor(private getAllStudents : GetStudentsInfoService, route:ActivatedRoute, private fb: FormBuilder) { }

  // studentForm2 = new FormGroup({
  //   fname : new FormControl(),
  //   lname : new FormControl(),
  //   email : new FormControl(),
  //   telephone : new FormControl()
  // })

  ngOnInit(): void {
    //grabbing all students that are in database
      this.getAllStudents.getAllStudents().subscribe((data:any)=>{
        this.students = data
        console.log(this.students)
      })
  }

  //function that deletes student from database
  removeStudent(id:any){
    this.getAllStudents.deleteStudent(id).subscribe(()=>{
      this.students = this.students.filter((f)=>{
        return f._id !== id
      })
    })
  }

  //function that defines student informtion in a form to be edited and updated
  editStudent(id:any){
    this.getAllStudents.getStudentDetails(id).subscribe((data)=>{

      this.id = id

      this.studentForm.setValue({
        fname : data.fname,
        lname : data.lname,
        email : data.email,
        telephone : data.telephone
    })
     
    })
  }

  //function that updates students after edit
  updateStudent(){
    this.getAllStudents.editStudent(this.id, this.studentForm.value).subscribe((data)=>{
      location.reload()
    })
  }

}
