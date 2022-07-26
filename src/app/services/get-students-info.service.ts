import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentInterface } from '../interfaces/student-interface'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetStudentsInfoService {

  API_ENDPOINT = 'http://localhost:8080/students'

  constructor(private http: HttpClient) { }

  //get all students from endpoint
  getAllStudents():Observable<StudentInterface[]>{
    return this.http.get<StudentInterface[]>(this.API_ENDPOINT)
  }

  //get single student details
  getStudentDetails(id:any):Observable<StudentInterface>{
    const url = `${this.API_ENDPOINT}/${id}`
    return this.http.get<StudentInterface>(url)
  }

  //delete student
  deleteStudent(id:string){
    const url = `${this.API_ENDPOINT}/${id}`
    return this.http.delete(url)
  }

  // create new student
  createStudent(data:StudentInterface){
    return this.http.post(this.API_ENDPOINT,data)
  }

  //edit student
  editStudent(id:string, data:StudentInterface){
    const url = `${this.API_ENDPOINT}/${id}`
    return this.http.patch(url, data)
  }

}
