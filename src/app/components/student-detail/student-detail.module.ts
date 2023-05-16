import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailComponent } from './student-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const routes = [
  { path: '', component: StudentDetailComponent }
];

@NgModule({
  declarations: [
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    StudentDetailComponent
  ]
})
export class StudentDetailModule { }
