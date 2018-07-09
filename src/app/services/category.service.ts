import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {CONFIG} from '../config/config';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly headers: Headers;
  private resourceBaseURL = `${CONFIG.API_URL}/categories`;

  constructor(private authService: AuthService,
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

  destroyCategory(categoryId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${categoryId}`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.delete(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  updateCategory(categoryId: number, category: any): Promise<any> {
    const url = `${this.resourceBaseURL}/${categoryId}`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.put(url, category, option)
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  storeCategory(category: any): Promise<any> {
    const url = `${this.resourceBaseURL}`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.post(url, category, option)
      .toPromise()
      .then(response => {
        // console.log(response);
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

  getCategoryProducts(categoryId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${categoryId}/products`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  getCategorySellers(categoryId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${categoryId}/products`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  getCategoryTransactions(categoryId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${categoryId}/transactions`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }

  getCategoryBuyers(categoryId: number): Promise<any> {
    const url = `${this.resourceBaseURL}/${categoryId}/buyers`;
    const option = new RequestOptions({ headers: this.headers});

    return this.http.get(url, option )
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json();
      });
  }
}
