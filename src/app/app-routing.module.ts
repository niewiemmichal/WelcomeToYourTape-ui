import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SurveysComponent } from './surveys/surveys.component';
import {SubjectFormComponent} from './subject-form/subject-form.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { QuestionFormComponent } from './question-form/question-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/subjects', pathMatch: 'full' },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'subjects/:id/teachers', component: TeachersComponent },
  { path: 'subjects/:sid/teachers/:tid', component: SurveysComponent },
  { path: 'subjects/add', component: SubjectFormComponent },
  { path: 'teachers/add', component: TeacherFormComponent },
  { path: 'questions/add', component: QuestionFormComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
