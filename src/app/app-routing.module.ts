import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SurveysComponent } from './surveys/surveys.component';

const routes: Routes = [
  { path: '', redirectTo: '/subjects', pathMatch: 'full' },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'subjects/:id/teachers', component: TeachersComponent },
  { path: 'subjects/:sid/teachers/:tid', component: SurveysComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
