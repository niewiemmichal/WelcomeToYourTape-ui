import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Survey} from './survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private surveysUrl = 'http://localhost:8080/welcometoyourtape/surveys';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addSurvey(survey: Survey): Observable<Survey> {
    return this.client.post<Survey>(this.surveysUrl, survey, this.httpOptions)
      .pipe(catchError(this.handleError<Survey>('addSurvey')));
  }

  getSurvey(subjectId: number, teacherId: number): Observable<Survey> {
    const url = `${this.surveysUrl}/${subjectId}/${teacherId}`;
    return this.client.get<Survey>(url)
      .pipe(catchError(this.handleError<Survey>(`getSurvey with subjectId=${subjectId} and teacherId=${teacherId}`)));
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(`Operation ${operation} failed`);
      console.error(error);
      return of(result as T);
    };
  }

  constructor(private client: HttpClient) { }
}
