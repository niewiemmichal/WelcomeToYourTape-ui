import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[];
  id: number;

  getTeachers(): void {
    this.teacherService.getTeachers(this.id).subscribe(ts => this.teachers = ts);
  }

  constructor(private teacherService: TeacherService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getTeachers();
  }

}
