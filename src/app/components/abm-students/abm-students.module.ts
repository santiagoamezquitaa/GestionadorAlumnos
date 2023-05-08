import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmStudentsComponent } from './abm-students.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AbmStudentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AbmStudentsModule { }
