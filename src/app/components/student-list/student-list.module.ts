import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { StudentListComponent } from './student-list.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: StudentListComponent }
];

@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [
  ]
})
export class StudentListModule { }
