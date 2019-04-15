import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionsUrl = 'https://michalpadula.me/welcometoyourtape/questions';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getQuestions(): Observable<Question[]> {
    return this.client.get<Question[]>(this.questionsUrl)
      .pipe(catchError(this.handleError<Question[]>('getQuestions', [])));
  }

  addQuestion(question: Question): Observable<Question> {
    return this.client.post<Question>(this.questionsUrl, question, this.httpOptions)
      .pipe(catchError(this.handleError<Question>('addQuestion')));
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(private client: HttpClient) { }
}
