import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Teacher } from './teacher'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  // private teachersUrl = 'https://michalpadula.me/welcometoyourtape/teachers';
  private teachersUrl = 'http://localhost:8080/welcometoyourtape/teachers';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getTeachers(subjectId: number): Observable<Teacher[]> {
    const url = `${this.teachersUrl}/subject/${subjectId}`;
    return this.client.get<Teacher[]>(url)
      .pipe(catchError(this.handleError<Teacher[]>('getTeachers', [])));
  }

  getAllTeachers(): Observable<Teacher[]> {
    return this.client.get<Teacher[]>(this.teachersUrl)
      .pipe(catchError(this.handleError<Teacher[]>('getTeachers', [])));
  }

  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.client.post<Teacher>(this.teachersUrl, teacher, this.httpOptions)
      .pipe(catchError(this.handleError<Teacher>('addTeacher')));
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(private client: HttpClient) { }
}
