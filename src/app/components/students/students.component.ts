import { Component, OnInit, ViewChild, ElementRef ,AfterContentInit, AfterViewInit} from '@angular/core';
import { GetStudentsInfoService } from 'src/app/services/get-students-info.service';
import { StudentInterface } from 'src/app/interfaces/student-interface';
import { ParamMap , ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, AfterViewInit {

  @ViewChild('update') updateForm!:ElementRef
  // @ViewChild('close') closeUpdateForm!:ElementRef

  students: StudentInterface[] = []

  Students:StudentInterface[]=[]

  id!:string

  studentForm = this.fb.group({
    fname:[''],
    lname:[''],
    email:[''],
    telephone:[''],
  })


  constructor(
    private getAllStudents : GetStudentsInfoService, 
    route:ActivatedRoute, 
    private fb: FormBuilder,
    private deleteNotification : MatSnackBar
    ) { }

  // studentForm2 = new FormGroup({
  //   fname : new FormControl(),
  //   lname : new FormControl(),
  //   email : new FormControl(),
  //   telephone : new FormControl()
  // })
 
  ngAfterViewInit(): void {
    console.log(this.updateForm)
  }

  ngOnInit(): void {
    //grabbing all students that are in database
      this.getAllStudents.getAllStudents().subscribe((data)=>{
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
      this.deleteNotification.open('Student deleted','',{duration:2000})
    })
  }

  //function that defines student informtion in a form to be edited and updated
  editStudent(id:any){
    this.getAllStudents.getStudentDetails(id).subscribe((data)=>{

      this.updateForm.nativeElement.style.display = 'block'
      // console.log(this.updateForm.nativeElement)

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
      this.updateForm.nativeElement.style.display = 'none'
      location.reload()
    })
  }

  closeUpdateForm(){
    this.updateForm.nativeElement.style.display = 'none'
  }



}

