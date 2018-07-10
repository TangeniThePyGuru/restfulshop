import { Component, OnInit } from '@angular/core';
import {NgProgress} from 'ngx-progressbar';
import {TransactionService} from '../../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: any;
  isLoading: boolean;

  constructor(
    public ngProgress: NgProgress, public transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.ngProgress.start();
    this.isLoading = true;
    this.transactionService.get().then(data => {
      this.transactions = data.data;
      this.ngProgress.done();
      this.isLoading = false;
    }).catch(error => {
      this.ngProgress.done();
      this.isLoading = false;
      console.log(error);
    });
  }

  transactionDeleted(transactionId) {
    const transaction = this.transactions.find((j) => {
      return j.id  === transactionId;
    });

    const transactionIndex = this.transactions.indexOf(transaction);

    this.transactions.splice(transactionIndex, 1);
  }

}
