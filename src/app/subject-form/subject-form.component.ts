import { Component, OnInit } from '@angular/core';

interface SubjectModel {
  name: string;
  year: number;
  semester: number;
  teachers: string[];
}

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  subject: SubjectModel = { name: '', year: 0, semester: 0, teachers: [] };

  teachers: string[] = [
    'Jan Kowalski', 'Antonio Banderas', 'Kot Wbutach', 'Władysław Jagiełło'
  ]

  constructor() { }

  ngOnInit() {
  }

}
