import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideNavbarComponent } from './components/aside-navbar/aside-navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './modules/core/core.module';
import { StudentListModule } from './components/student-list/student-list.module';
import { AbmStudentsModule } from './components/abm-students/abm-students.module';
import { HomePageModule } from './components/home-page/home-page.module';

@NgModule({
  declarations: [
    AppComponent,
    AsideNavbarComponent,
    ToolbarComponent,
    ContentAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    StudentListModule,
    AbmStudentsModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
