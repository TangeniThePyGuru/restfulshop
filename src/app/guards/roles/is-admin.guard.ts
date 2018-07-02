import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(
    private authService: AuthService
  ) {}

  canActivate() {
    if (!this.authService.isAdmin()) {
      return true;
    }
  }
}
