import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmUsersComponent } from './abm-users.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const routes = [
  { path: '', component: AbmUsersComponent }
];

@NgModule({
  declarations: [
    AbmUsersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AbmUsersModule { }
