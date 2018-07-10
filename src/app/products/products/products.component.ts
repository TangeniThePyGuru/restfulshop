import { Component, OnInit } from '@angular/core';
import {Product} from '../../classes/product';
import {ProductService} from '../../services/product.service';
import {NgProgress} from 'ngx-progressbar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products;
  public isLoading: boolean;
  constructor(
    private productService: ProductService,
    private ngProgress: NgProgress
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.ngProgress.start();
    this.isLoading = true;
    this.productService.get().then(data => {
      this.products = data.data;
      this.isLoading = false;
      this.ngProgress.done();
    }).catch(error => {
      this.isLoading = false;
      this.ngProgress.done();
      console.log(error);
    });
  }

  productDeleted(productId) {
    const product = this.products.find((j) => {
      return j.identifier  === productId;
    });

    const productIndex = this.products.indexOf(product);

    this.products.splice(productIndex, 1);
  }

}
