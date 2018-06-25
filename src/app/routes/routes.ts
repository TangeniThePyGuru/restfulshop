import {LoginComponent} from '../login/login.component';
import {AuthedGuard} from '../guards/authed/authed.guard';

export const ROUTES = [
  { path: 'auth/login', component: LoginComponent, canActivate: [AuthedGuard]},
];
