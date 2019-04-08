import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Teacher } from './teacher'
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private teachersUrl = 'api/teachers';

  getTeachers(): Observable<Teacher[]> {
    return this.client.get<Teacher[]>(this.teachersUrl)
      .pipe(catchError(this.handleError<Teacher[]>('getTeachers', [])));
  }

  private handleError<T> (operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  constructor(private client: HttpClient) { }
}
