import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule } from '@angular/router' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SurveysComponent } from './surveys/surveys.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { QuestionFormComponent } from './question-form/question-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    SubjectDetailComponent,
    SubjectFormComponent,
    TeachersComponent,
    SurveysComponent,
    NavbarComponent,
    TeacherFormComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
    //),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
