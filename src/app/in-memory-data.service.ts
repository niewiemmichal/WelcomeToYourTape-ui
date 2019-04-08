import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Subject } from './subject';
import { Teacher } from './teacher'; 

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
    const teachers = [
      { id: 1, name: 'Jan Kowalski' },
      { id: 2, name: 'Ryszard Zklanu' },
      { id: 3, name: 'Antonio Banderas' },
      { id: 4, name: 'Eryk Sony' }
    ]
    
    return {subjects, teachers};
  }

  constructor() { }
}
