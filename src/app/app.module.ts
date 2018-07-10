import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthService} from './services/auth.service';
import {NotifyService} from './services/notify.service';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes/routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgProgressModule} from 'ngx-progressbar';
import {AuthGuard} from './guards/auth/auth.guard';
import {AuthedGuard} from './guards/authed/authed.guard';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NotifyComponent} from './notify/notify.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { BuyersComponent } from './users/buyer/buyers/buyers.component';
import { BuyerComponent } from './users/buyer/buyer/buyer.component';
import {BuyerService} from './services/buyer.service';
import {UserService} from './services/user.service';
import {SellerService} from './services/seller.service';
import {ProductService} from './services/product.service';
import {CategoryService} from './services/category.service';
import {TransactionService} from './services/transaction.service';
import { PrettyDatePipe } from './pipes/pretty-date.pipe';
import { SellersComponent } from './users/seller/sellers/sellers.component';
import { SellerComponent } from './users/seller/seller/seller.component';
import { UsersTemplateComponent } from './templates/users-template/users-template.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products/products.component';
import { TransactionComponent } from './transactions/transaction/transaction.component';
import { TransactionsComponent } from './transactions/transactions/transactions.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { LeftNavComponent } from './navigation/left-nav/left-nav.component';
import { TopBarComponent } from './navigation/top-bar/top-bar.component';
import { ProfileComponent } from './profile/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotifyComponent,
    DashboardComponent,
    HomeComponent,
    BuyersComponent,
    BuyerComponent,
    PrettyDatePipe,
    SellersComponent,
    SellerComponent,
    UsersTemplateComponent,
    ProductComponent,
    ProductsComponent,
    TransactionComponent,
    TransactionsComponent,
    EditProfileComponent,
    LeftNavComponent,
    TopBarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule,
    NgProgressModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthedGuard,
    NotifyService,
    BuyerService,
    UserService,
    SellerService,
    ProductService,
    CategoryService,
    TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
