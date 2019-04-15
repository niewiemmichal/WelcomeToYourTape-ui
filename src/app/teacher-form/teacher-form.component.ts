import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher';
import {SubjectService} from '../subject.service';
import {SurveyService} from '../survey.service';
import {Survey} from '../survey';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {
  teacher: Teacher = { id: null, name: '', surname: '', degree: 'DOCTORAL' };
  subjects: Subject[] = [];
  selectedSubjects: Subject[] = [];
  recentlyAdded: Teacher[] = [];

  constructor(private subjectService: SubjectService,
              private teacherService: TeacherService,
              private surveyService: SurveyService) { }

  
  addSubject() {
    if (this.selectedSubjects.length > 0) {
      const surveys = new Array<Survey>();
      this.selectedSubjects.forEach(subject => surveys.push( {id: null, subject: subject, teacher: this.teacher} ));
      this.surveyService.addSurveys(surveys).subscribe(() => this.recentlyAdded.push(this.teacher));
    } else {
      this.teacherService.addTeacher(this.teacher).subscribe(() => this.recentlyAdded.push(this.teacher));
    }
  }

  ngOnInit() {
    this.subjectService.getSubjects()
      .subscribe(ss => this.subjects = ss);
  }

}
