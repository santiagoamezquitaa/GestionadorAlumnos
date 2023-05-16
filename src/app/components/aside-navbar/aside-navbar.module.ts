import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AsideNavbarComponent } from './aside-navbar.component';

@NgModule({
  declarations: [
    AsideNavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AsideNavbarComponent,
  ]
})
export class AsideNavbarModule { }
