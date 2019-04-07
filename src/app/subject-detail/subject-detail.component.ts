import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../subject'
import { SubjectService } from '../subject.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {

  @Input() subject: Subject;

  save(): void {
    this.subjectService.updateSubject(this.subject).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getSubject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.subjectService.getSubject(id)
      .subscribe(s => this.subject = s);
  }

  constructor(private subjectService: SubjectService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSubject();
  }

}
