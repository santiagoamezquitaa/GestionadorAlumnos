import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent } from './user-page.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { ContentAreaModule } from '../content-area/content-area.module';
import { AsideNavbarModule } from '../aside-navbar/aside-navbar.module';


@NgModule({
  declarations: [
    UserPageComponent,
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    ToolbarModule,
    AsideNavbarModule,
    ContentAreaModule,
  ]
})
export class UserPageModule { }
