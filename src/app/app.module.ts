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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotifyComponent,
    DashboardComponent,
    HomeComponent,
    BuyersComponent,
    BuyerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule,
    NgProgressModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, AuthedGuard, NotifyService, BuyerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
