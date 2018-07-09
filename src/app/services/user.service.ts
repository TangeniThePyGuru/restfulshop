import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {CONFIG} from '../config/config';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly headers: Headers;
  private resourceBaseURL = `${CONFIG.API_URL}/users`;

  constructor(
    private authService: AuthService,
    private http: Http,
  ) {
    this.headers = new Headers({'Authorization': `Bearer ${this.authService.getToken()}`});
  }

  /**
   *
   * @param {string} endPoint
   * @returns {Promise<any>}
   */
  get(endPoint: string = null): Promise<any> {

    let url ;
    if (endPoint) {
      url  = endPoint;
    } else {
      url = `${this.resourceBaseURL}`;
    }
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        return response.json();
      });

  }

  /**
   *
   * @param {number} userId
   * @returns {Promise<any>}
   */
  getById(userId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${userId}`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  /**
   *
   * @param user
   * @returns {Promise<any>}
   */
  storeUser(user: any): Promise<any> {
    const url = `${this.resourceBaseURL}`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.post(url, user, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  /**
   *
   * @param user
   * @param {number} userId
   * @returns {Promise<any>}
   */
  updateUser(user: any, userId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${userId}`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.put(url, user, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  /**
   *
   * @param {number} userId
   * @returns {Promise<any>}
   */
  destroyUser(userId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${userId}`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.delete(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

}
