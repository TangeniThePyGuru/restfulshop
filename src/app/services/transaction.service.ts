import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {CONFIG} from '../config/config';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly headers: Headers;
  private resourceBaseURL = `${CONFIG.API_URL}/transactions`;

  constructor(
    private authService: AuthService,
    private http: Http,
  ) {
    this.headers = new Headers({'Authorization': `Bearer ${this.authService.getToken()}`});
  }

  /**
   *
   * @param {any} endPoint
   * @returns {Promise<any>}
   */
  get(endPoint = null): Promise<any> {

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

  getById(transactionId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${transactionId}`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  getTransactionCategories(transactionId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${transactionId}/categories`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  getTransactionSellers(transactionId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${transactionId}/sellers`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

}
