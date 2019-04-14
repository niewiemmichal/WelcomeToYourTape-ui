import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher';
import {SubjectService} from '../subject.service';
import {SurveyService} from '../survey.service';
import {Survey} from '../survey';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  subject: Subject = { id: null, name: '', year: 2019, semester: 1 };
  teachers: Teacher[] = [];
  selectedTeachers: Teacher[] = [];
  recentlyAdded: Subject[] = [];

  constructor(private subjectService: SubjectService,
              private teacherService: TeacherService,
              private surveyService: SurveyService) { }

  addSubject() {
    if (this.selectedTeachers.length > 0) {
      const surveys = new Array<Survey>();
      this.selectedTeachers.forEach(teacher => surveys.push( {id: null, subject: this.subject, teacher} ));
      this.surveyService.addSurveys(surveys).subscribe(() => this.recentlyAdded.push(this.subject));
    } else {
      this.subjectService.addSubject(this.subject).subscribe(() => this.recentlyAdded.push(this.subject));
    }
  }

  ngOnInit() {
    this.teacherService.getAllTeachers()
      .subscribe(ts => this.teachers = ts);
  }
}
