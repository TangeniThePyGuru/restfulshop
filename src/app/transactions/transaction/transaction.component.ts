import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  @Input() transaction;
  @Output() transactionDeleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete() {

  }

  edit() {

  }

  cancel() {

  }

}
