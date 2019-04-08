import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject'
import { TeacherService } from '../teacher.service'
import { Teacher } from '../teacher';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  subject: Subject = { id: 0, name: '', year: 0, semester: 0 };
  teachers: Teacher[] = []
  selectedTeachers: Teacher[] = []

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherService.getTeachers()
      .subscribe(ts => this.teachers = ts);
  }

}
