import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideNavbarComponent } from './components/aside-navbar/aside-navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AbmStudentsComponent } from './components/abm-students/abm-students.component';
import { MakeFullNamePipe } from './pipes/make-full-name.pipe';
import { MaakeStatusPipe } from './pipes/maake-status.pipe';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';
import { TitlesSizeDirective } from './directives/titles-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    AsideNavbarComponent,
    ToolbarComponent,
    ContentAreaComponent,
    StudentListComponent,
    AbmStudentsComponent,
    MakeFullNamePipe,
    MaakeStatusPipe,
    HomePageComponent,
    TitlesSizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
