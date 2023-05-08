import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';
import { StudentService } from 'src/app/services/student.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    SharedService,
    StudentService,
  ]
})
export class CoreModule { }