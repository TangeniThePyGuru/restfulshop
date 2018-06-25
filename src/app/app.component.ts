import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {CONFIG} from './config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = CONFIG.app_name;
  public user;

  constructor(private authService: AuthService) {
    this.user = this.authService.getAuthUser();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
