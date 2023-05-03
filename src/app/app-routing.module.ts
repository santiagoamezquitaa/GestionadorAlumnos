import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AbmStudentsComponent } from './components/abm-students/abm-students.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'studentList', component: StudentListComponent },
  { path: 'inscription', component: AbmStudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
