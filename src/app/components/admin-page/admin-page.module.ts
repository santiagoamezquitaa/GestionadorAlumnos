import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageComponent } from './admin-page.component';
import { AdminPageRoutingModule } from './admin-page-routing.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { AsideNavbarModule } from '../aside-navbar/aside-navbar.module';
import { ContentAreaModule } from '../content-area/content-area.module';

@NgModule({
  declarations: [
    AdminPageComponent,
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    ToolbarModule,
    AsideNavbarModule,
    ContentAreaModule,
  ],
  exports: [
  ]
})
export class AdminPageModule { }
