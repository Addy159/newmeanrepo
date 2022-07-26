import { Component, OnInit } from '@angular/core';
import { GetStudentsInfoService } from 'src/app/services/get-students-info.service';
import { FormBuilder , Validators , FormGroup, FormControl} from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  submitted = false
  
  createStudentForm = this.fb.group({
    fname:['', Validators.required],
    lname:['', Validators.required],
    email:['', Validators.required],
    telephone:['', Validators.required],
  })

  createStudentFormOne = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname:new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    telephone:new FormControl('', Validators.required)
  })


  constructor( private createStudents : GetStudentsInfoService, private fb:FormBuilder , private route: Router) { }

  ngOnInit(): void {
  }

  createStudent(){
    if(this.createStudentForm.valid){
      this.createStudents.createStudent(this.createStudentForm.value).subscribe(()=>{
        this.route.navigateByUrl('/students')
      })
    }
   
    this.submitted = true
  }

  //return form control of forms
  get createControl(){
    return this.createStudentForm.controls;
  }
}
