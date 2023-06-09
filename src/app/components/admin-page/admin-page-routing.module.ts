import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { AdminAuthGuard } from 'src/app/guards/admin-auth.guard';

const routes: Routes = [
  { 
    path: '', 
    canActivate: [AdminAuthGuard],
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
      { 
        path: 'userList',
        loadChildren: () =>
          import('../../components/user-list/user-list.module').then((m) => m.UserListModule),
      },
      { 
        path: 'usersInscription',
        loadChildren: () =>
          import('../../components/abm-users/abm-users.module').then((m) => m.AbmUsersModule),
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
export class AdminPageRoutingModule { }
