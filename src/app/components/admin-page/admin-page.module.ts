import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentAreaComponent } from '../content-area/content-area.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { AsideNavbarComponent } from '../aside-navbar/aside-navbar.component';
import { AdminPageComponent } from './admin-page.component';
import { AdminPageRoutingModule } from './admin-page-routing.module';

@NgModule({
  declarations: [
    AdminPageComponent,
    ToolbarComponent,
    ContentAreaComponent,
    AsideNavbarComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
  ],
  exports: [
  ]
})
export class AdminPageModule { }
