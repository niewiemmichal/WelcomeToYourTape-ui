import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Answer} from './answer';
import {Subject} from './subject';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  // private answersUrl = 'https://michalpadula.me/welcometoyourtape/answers';
  private answersUrl = 'http://localhost:8080/welcometoyourtape/answers';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addAnswer(answers: Answer[]): Observable<Answer | Answer[]> {
    return this.client.post<Answer[]>(this.answersUrl, answers, this.httpOptions)
      .pipe(catchError(this.handleError<Answer>('addAnswer')));
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(private client: HttpClient) { }
}
