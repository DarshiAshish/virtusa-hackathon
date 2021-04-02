import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './AdminCourse';
@Injectable({
  providedIn: 'root'
})
export class CoursetestService {

  constructor(private http:HttpClient) { }
  updateCourse(c:Course):Observable<any>{
    return this.http.post<any>("http://localhost:8080/admin/courses",c);
  }
}
