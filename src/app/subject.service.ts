import { Injectable } from '@angular/core';
import { Subject } from './subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectsUrl = 'http://localhost:8080/welcometoyourtape/subjects';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getSubjects(): Observable<Subject[]> {
    return this.client.get<Subject[]>(this.subjectsUrl)
      .pipe(catchError(this.handleError<Subject[]>('getSubjects', [])));
  }

  getSubject(id: number): Observable<Subject> {
    const url = `${this.subjectsUrl}/${id}`;
    return this.client.get<Subject>(url)
      .pipe(catchError(this.handleError<Subject>(`getSubject with id=${id}`)));
  }

  updateSubject(subject: Subject): Observable<Subject> {
    return this.client.put<Subject>(this.subjectsUrl, subject, this.httpOptions)
      .pipe(catchError(this.handleError<Subject>(`updateHero with id=${subject.id}`)));
  }

  addSubject(subject: Subject): Observable<Subject> {
    return this.client.post<Subject>(this.subjectsUrl, subject, this.httpOptions)
      .pipe(catchError(this.handleError<Subject>('addHero')));
  }

  deleteSubject(id: number): Observable<Subject> {
    const url = `${this.subjectsUrl}/${id}`;
    return this.client.delete<Subject>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Subject>(`deleteHero with id=${id}`)));
  }

  private handleError<T> (operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  constructor(private client: HttpClient) {}
}
