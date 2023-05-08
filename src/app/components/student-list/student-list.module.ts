import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { StudentListComponent } from './student-list.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AppRoutingModule,
  ]
})
export class StudentListModule { }
