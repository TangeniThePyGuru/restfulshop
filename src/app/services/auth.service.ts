import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { CONFIG } from '../config/config';
import { Http } from '@angular/http';
import { Router} from '@angular/router';
import {UserData} from '../classes/UserData';
import {NotifyService} from './notify.service';
import {AuthToken} from '../classes/auth-token';
import {User} from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: Http,
    private router: Router,
    private notifyService: NotifyService,
  ) {

  }

  /**
   *
   * @returns {AuthToken}
   */
  getToken(): AuthToken {
    return JSON.parse(localStorage.getItem('token'));
  }

  /**
   *
   * @returns {User}
   */
  getAuthUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  /**
   *
   * @returns {boolean}
   */
  isAdmin(): boolean {
    return this.getAuthUser().admin;
  }

  /**
   *
   * @returns {boolean}
   */
  isLoggedIn(): boolean {
    const token = this.getToken() ? this.getToken().access_token : null;
    const user =  this.getAuthUser();
    // const expires_in = this.getToken() ? this.getToken().expires_in : null;
    // user is authenticated
    if ( token && user) {
      return true;
    }
    // not authenticated
    return false;
  }

  /**
   *
   * @returns {number}
   */
  getAuthUserId(): number {
    return this.getAuthUser().id;
  }

  /**
   *
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @returns {Promise<UserData>}
   */
  register(name: string, email: string, password: string): Promise<UserData> {
    return this.http.post(`${CONFIG.API_URL}/register`, { name: name, email: email, password: password })
      .toPromise()
      .then((response) => {
        const token = response.json().token;
        const user = response.json().user.data;
        return new UserData(token, user);
        // return userData;
      })
      .catch(error => {
        return Promise.reject(error.json());
      });
  }

  /**
   *
   * @param {string} email
   * @param {string} password
   * @returns {Promise<UserData>}
   */
  login(email: string, password: string): Promise<UserData> {
    return this.http.post(`${CONFIG.API_URL}/authenticate`,
      { username: email, password: password })
      .toPromise()
      .then((response) => {
        console.log(response.json());
        // console.debug(response.json());
        const token = new AuthToken(response.json().auth.expires_in,
                                    response.json().auth.access_token,
                                    response.json().auth.refresh_token) ;
        const user = new User(response.json().user.id, response.json().user.name,
                              response.json().user.email, response.json().user.admin,
                              response.json().user.created_at, response.json().user.updated_at);

        console.log(token, user);
        // const
        return new UserData(token, user);

        // return userData;
      })
      .catch(error => {
        return Promise.reject(error.json());
      });
  }

  /**
   *
   * @param {UserData} userData
   */
  logUserIn(userData: UserData): void {
    localStorage.setItem('token', JSON.stringify(userData.token));

    localStorage.setItem('user', JSON.stringify(userData.user));

    this.notifyService.notify('Successfully logged in.', 'success');

    this.router.navigate(['dashboard']);
  }

  logout() {

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['auth/login']);
  }
}
