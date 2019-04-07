import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects: Subject[];

  getSubjects(): void {
    this.subjectService.getSubjects().subscribe(ss => this.subjects = ss);
  }

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.getSubjects();
  }

}
