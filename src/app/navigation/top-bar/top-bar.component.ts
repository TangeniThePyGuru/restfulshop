import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CONFIG} from '../../config/config';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  title = CONFIG.app_name;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }

}
