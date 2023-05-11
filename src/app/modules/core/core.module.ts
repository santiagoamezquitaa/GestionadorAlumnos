import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';
import { StudentService } from 'src/app/services/student.service';
import { AuthService } from 'src/app/services/auth.service';

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
    AuthService,
  ]
})
export class CoreModule { }