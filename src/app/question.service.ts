import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionsUrl = 'http://localhost:8080/welcometoyourtape/questions';

  getQuestions(): Observable<Question[]> {
    return this.client.get<Question[]>(this.questionsUrl)
      .pipe(catchError(this.handleError<Question[]>('getQuestions', [])));
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(private client: HttpClient) { }
}
