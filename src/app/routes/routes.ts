import {LoginComponent} from '../login/login.component';
import {AuthedGuard} from '../guards/authed/authed.guard';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AuthGuard} from '../guards/auth/auth.guard';
import {HomeComponent} from '../home/home.component';

export const ROUTES = [
  { path: 'auth/login', component: LoginComponent, canActivate: [AuthedGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: '', component: HomeComponent, canActivate: [AuthedGuard]},
];
