import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service"
import {NotifyService} from "../services/notify.service";
import {NgProgress} from "ngx-progressbar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      public authService: AuthService,
      private notifyService: NotifyService,
      public ngProgress: NgProgress
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.ngProgress.start();
    this.authService.login(form.value.email, form.value.password)
        .then((userData) => {
            this.ngProgress.done();
            this.authService.logUserIn(userData);
        })
        .catch(error => {
          this.ngProgress.done();
          this.notifyService.notify(error.error + ', please try again!', 'error');
        });
  }

}
