import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Headers, Http, RequestOptions} from '@angular/http';
import {CONFIG} from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private readonly headers: Headers;
  private resourceBaseURL = `${CONFIG.API_URL}/sellers`;

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
      url = `${this.resourceBaseURL}}`;
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
   * @param {number} sellerId
   * @returns {Promise<any>}
   */
  getById(sellerId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${sellerId}`;
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
   * @param {number} sellerId
   * @returns {Promise<any>}
   */
  getSellerTransactions(sellerId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${sellerId}/transactions/`;
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
   * @param {number} sellerId
   * @returns {Promise<any>}
   */
  getSellerBuyers(sellerId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${sellerId}/buyers/`;
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
   * @param {number} sellerId
   * @returns {Promise<any>}
   */
  getSellerCategories(sellerId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${sellerId}/categories`;
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
   * @param {number} sellerId
   * @returns {Promise<any>}
   */
  getSellerProducts(sellerId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${sellerId}/products/`;
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
   * @param {number} sellerId
   * @param product
   * @returns {Promise<any>}
   */
  storeSellerProduct(sellerId: number, product: any ): Promise<any> {
    const url = `${this.resourceBaseURL}/${sellerId}/products/`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.post(url, product, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  /**
   *
   * @param {number} sellerId
   * @param {number} productId
   * @param product
   * @returns {Promise<any>}
   */
  updateSellerProduct(sellerId: number, productId: number, product: any ): Promise<any> {
    const url = `${this.resourceBaseURL}/${sellerId}/products/${productId}`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.put(url, product, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  /**
   *
   * @param {number} sellerId
   * @param {number} productId
   * @returns {Promise<any>}
   */
  destroySellerProduct(sellerId: number, productId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${sellerId}/products/${productId}`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.delete(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }
}
