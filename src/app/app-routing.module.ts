import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  { 
    path: 'admin-page',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/admin-page/admin-page.module').then((m) => m.AdminPageModule),
  },
  {
    path: '**', redirectTo: 'admin-page/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
