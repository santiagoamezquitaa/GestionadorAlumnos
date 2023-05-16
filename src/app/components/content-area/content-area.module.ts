import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAreaComponent } from './content-area.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContentAreaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ContentAreaComponent,
  ]
})
export class ContentAreaModule { }
