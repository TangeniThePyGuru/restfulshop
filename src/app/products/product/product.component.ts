import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product;
  @Output() productDeleted = new EventEmitter();
  editing = false;

  constructor() { }

  ngOnInit() {
  }

  delete() {

  }

  edit() {
    this.editing = true;
  }

  cancel() {
    this.editing = false;
  }

}
