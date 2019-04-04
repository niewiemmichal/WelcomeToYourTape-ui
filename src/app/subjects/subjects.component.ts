import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Subject {
  name: string;
  year: number;
  semester: number;
}

const SUBJECTS: Subject[] = [
  {
    name: 'Systemy mikroprocesorowe i wbudowane',
    year: 2,
    semester: 4
  },
  {
    name: 'Podstawy programowania komputerów',
    year: 1,
    semester: 1  
  },
  {
    name: 'Fizyka',
    year: 1,
    semester: 1  
  },
  {
    name: 'Elektronika i miernictwo',
    year: 2,
    semester: 3  
  }
]

function search(text: string): Subject[] {
  return SUBJECTS.filter(subject => {
    return subject.name.includes(text);
  })
}

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects$: Observable<Subject[]>;
  filter = new FormControl('');

  constructor() {
    this.subjects$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text))
    );
  }

  ngOnInit() {
  }

}
