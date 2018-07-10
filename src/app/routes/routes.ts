import {LoginComponent} from '../login/login.component';
import {AuthedGuard} from '../guards/authed/authed.guard';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AuthGuard} from '../guards/auth/auth.guard';
import {HomeComponent} from '../home/home.component';
import {BuyersComponent} from '../users/buyer/buyers/buyers.component';
import {SellersComponent} from '../users/seller/sellers/sellers.component';
import {UsersTemplateComponent} from '../templates/users-template/users-template.component';
import {ProductsComponent} from '../products/products/products.component';
import {TransactionsComponent} from '../transactions/transactions/transactions.component';
import {EditProfileComponent} from '../profile/edit-profile/edit-profile.component';

export const ROUTES = [
  { path: 'auth/login', component: LoginComponent, canActivate: [AuthedGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersTemplateComponent, canActivate: [AuthGuard],
          children: [{path: 'buyers', component: BuyersComponent },
                     {path: 'sellers', component: SellersComponent },
                     {path: 'edit', component: EditProfileComponent}]},
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard]},
  { path: '', component: HomeComponent, canActivate: [AuthedGuard]},
];
