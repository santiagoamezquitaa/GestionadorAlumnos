import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmStudentsComponent } from './abm-students.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

const routes = [
  { path: '', component: AbmStudentsComponent }
];

@NgModule({
  declarations: [
    AbmStudentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatSelectModule,
  ],
  exports: [
  ]
})
export class AbmStudentsModule { }
