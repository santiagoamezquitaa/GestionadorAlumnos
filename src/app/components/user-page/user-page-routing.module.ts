import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page.component';
import { UserAuthGuard } from 'src/app/guards/user-auth.guard';

const routes: Routes = [
  { 
    path: '', 
    canActivate: [UserAuthGuard],
    component: UserPageComponent,
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
      { 
        path: ':username',
        loadChildren: () =>
          import('../../components/student-detail/student-detail.module').then((m) => m.StudentDetailModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
