import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service'


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  question: Question = { id: null, contents: '', isOpen: false };
  recentlyAdded: Question[] = [];

  constructor(private questionService: QuestionService) { }

  addQuestion() {
    this.questionService.addQuestion(this.question)
      .subscribe(() => this.recentlyAdded.push(this.question));
  }

  ngOnInit() { }

}
