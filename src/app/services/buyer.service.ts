import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Headers, Http, RequestOptions} from '@angular/http';
import {CONFIG} from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  private headers: Headers;

  constructor(
    private authService: AuthService,
    private http: Http,
  ) {
    this.headers = new Headers({'Authorization': `Bearer ${this.authService.getToken()}`});
  }

  get(endPoint = null): Promise<any> {

    let url ;
    if (endPoint) {
      url  = endPoint;
    } else {
      url = `${CONFIG.API_URL}/buyers`;
    }
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        return response.json();
      });

  }

  getById(id: number): Promise<any> {
    const url = `${CONFIG.API_URL}/buyers/${id}`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  getBuyerTransactions(buyerId: number): Promise<any> {
    const url = `${CONFIG.API_URL}/buyers/${buyerId}/transactions/`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  getBuyerProducts(buyerId: number): Promise<any> {
    const url = `${CONFIG.API_URL}/buyers/${buyerId}/products/`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  getBuyerSellers(buyerId: number): Promise<any> {
    const url = `${CONFIG.API_URL}/buyers/${buyerId}/sellers/`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  getBuyerCategories(buyerId: number): Promise<any> {
    const url = `${CONFIG.API_URL}/buyers/${buyerId}/categories`;
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
