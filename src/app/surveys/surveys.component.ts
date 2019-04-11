import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { Location } from '@angular/common';
import { v4 as uuid } from 'uuid';
import {AnswerService} from '../answer.service';
import {ActivatedRoute} from '@angular/router';
import {Survey} from '../survey';
import {SurveyService} from '../survey.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {

  questions: Question[];
  answers: Answer[];
  survey: Survey;

  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(qs => {
        this.questions = qs;
        this.answers = new Array<Answer>(this.questions.length)
          .fill(null).map(() => (new Answer()));
      });
  }

  submit(): void {
    const respondentId = uuid();
    let i = 0;
    for (const answer of this.answers) {
      answer.question = this.questions[i];
      answer.respondent = respondentId;
      answer.survey = this.survey;
      i++;
    }
    this.answerService.addAnswer(this.answers)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  constructor(private questionService: QuestionService,
              private answerService: AnswerService,
              private surveyService: SurveyService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getQuestions();
    const subjectId = +this.route.snapshot.paramMap.get('sid');
    const teacherId = +this.route.snapshot.paramMap.get('tid');
    this.surveyService.getSurvey(subjectId, teacherId)
      .subscribe(s => this.survey = s);
  }

}
