import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../classes/user';

@Component({
  selector: 'app-users-template',
  templateUrl: './users-template.component.html',
  styleUrls: ['./users-template.component.css']
})
export class UsersTemplateComponent implements OnInit {
  public user: User;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getAuthUser();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
