import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    canActivate: [AuthGuard],
    component: AdminPageComponent,
    children: [
      { 
        path: 'home',
        loadChildren: () =>
          import('../home-page/home-page.module').then((m) => m.HomePageModule), 
      },
      { 
        path: 'studentList',
        loadChildren: () =>
          import('../../components/student-list/student-list.module').then((m) => m.StudentListModule),
      },
      { 
        path: 'inscription',
        loadChildren: () =>
          import('../../components/abm-students/abm-students.module').then((m) => m.AbmStudentsModule),
      },
    ]
  },
  {
    path: '**', redirectTo: 'admin-page/home',
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
