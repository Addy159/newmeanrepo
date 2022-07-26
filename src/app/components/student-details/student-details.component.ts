import { Component, OnInit } from '@angular/core';
import { StudentInterface } from 'src/app/interfaces/student-interface';
import { GetStudentsInfoService } from 'src/app/services/get-students-info.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor( private getStudent: GetStudentsInfoService, private route:ActivatedRoute) { }

  student:StudentInterface[] = []

  ngOnInit(): void {
    const id =  this.route.snapshot.paramMap.get('id') as string
    this.getStudent.getStudentDetails(id).subscribe((data:StudentInterface)=>{
      this.student.push(data)
    })
    console.log(this.student)
  }

}
