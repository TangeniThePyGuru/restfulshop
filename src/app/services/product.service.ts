import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {AuthService} from './auth.service';
import {CONFIG} from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly headers: Headers;
  private resourceBaseURL = `${CONFIG.API_URL}/products`;

  constructor(private authService: AuthService,
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
   * @param {number} id
   * @returns {Promise<any>}
   */
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

  /**
   *
   * @param {number} productId
   * @returns {Promise<any>}
   */
  getProductTransactions(productId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${productId}/transactions`;
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
   * @param {number} productId
   * @returns {Promise<any>}
   */
  getProductBuyers(productId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${productId}/buyers`;
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
   * @param {number} productId
   * @returns {Promise<any>}
   */
  getProductCategories(productId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${productId}/categories`;
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
   * @param category
   * @param {number} productId
   * @param {number} categoryId
   * @returns {Promise<any>}
   */
  updateProductCategory(category: any, productId: number, categoryId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${productId}/category/${categoryId}`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.put(url, category, option)
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  /**
   *
   * @param {number} productId
   * @param {number} categoryId
   * @returns {Promise<any>}
   */
  destroyProductCategory(productId: number, categoryId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${productId}/category/${categoryId}`;
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
   * @param transaction
   * @param {number} productId
   * @param {number} userId
   * @returns {Promise<any>}
   */
  storeProductBuyersTransactions(transaction: any, productId: number, userId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${productId}/buyers/${userId}/transactions`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.post(url, transaction, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }
}
