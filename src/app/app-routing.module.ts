import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { UserAuthGuard } from './guards/user-auth.guard';

const routes: Routes = [
  { 
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  { 
    path: 'admin-page',
    canActivate: [AdminAuthGuard],
    loadChildren: () =>
      import('./components/admin-page/admin-page.module').then((m) => m.AdminPageModule),
  },
  { 
    path: 'user-page',
    canActivate: [UserAuthGuard],
    loadChildren: () =>
      import('./components/user-page/user-page.module').then((m) => m.UserPageModule),
  },
  {
    path: '',
    loadChildren: () =>
    import('./components/login/login.module').then((m) => m.LoginModule),
  }
  // {
  //   path: '**',
  //   canActivate: [ProfileGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
