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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule,
    NgProgressModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, AuthedGuard, NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
