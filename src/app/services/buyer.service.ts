import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Headers, Http, RequestOptions} from '@angular/http';
import {CONFIG} from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  private readonly headers: Headers;
  private resourceBaseURL = `${CONFIG.API_URL}/buyers`;

  constructor(
    private authService: AuthService,
    private http: Http,
  ) {
    this.headers = new Headers({'Authorization': `Bearer ${this.authService.getToken().access_token}`});
  }

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

  getById(id: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${id}`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  getBuyerTransactions(buyerId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${buyerId}/transactions/`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  getBuyerProducts(buyerId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${buyerId}/products/`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  getBuyerSellers(buyerId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${buyerId}/sellers/`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  getBuyerCategories(buyerId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${buyerId}/categories`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  create() {

  }

  delete(id: number) {

  }

  update() {

  }


}
