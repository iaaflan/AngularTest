import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { SuperComponent } from './super/super.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin, Role.SuperAdmin, Role.SystemAdmin] },
  },
  {
    path: 'super',
    component: SuperComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.SuperAdmin, Role.SystemAdmin]},
  },
  {
    path: 'system',
    component: SystemComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.SystemAdmin]},
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
