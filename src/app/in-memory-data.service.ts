import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const subjects = [
      { id: 1, name: 'Informatyka', year: 2018, semester: 1},
      { id: 2, name: 'Język Polski', year: 2018, semester: 1},
      { id: 3, name: 'Matematyka', year: 2018, semester: 1},
      { id: 4, name: 'Wychownie Fizyczne', year: 2018, semester: 1}
    ];
    return {subjects};
  }

  genId(subjects: Subject[]): number {
    return subjects.length > 0 ? Math.max(...subjects.map(s => s.id)) + 1 : 1;
  }

  constructor() { }
}
