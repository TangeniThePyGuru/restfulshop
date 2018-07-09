import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {BuyerService} from '../../../services/buyer.service';
import {Buyer} from '../../../classes/buyer';
import {NgProgress} from 'ngx-progressbar';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {
  public buyers: any;
  public isLoading: boolean;
  constructor(private buyerService: BuyerService, private ngProgress: NgProgress) { }

  ngOnInit() {
    this.getBuyers();
  }

  getBuyers() {
    this.ngProgress.start();
    this.isLoading = true;
    this.buyerService.get().then(data => {
      this.buyers = data;
      this.isLoading = false;
      this.ngProgress.done();
    }).catch(error => {
      this.isLoading = false;
      this.ngProgress.done();
      console.log(error);
    });
  }

  buyerDeleted(buyerId) {
    const buyer = this.buyers.find((j) => {
      return j.id  === buyerId;
    });

    const buyerIndex = this.buyers.indexOf(buyer);

    this.buyers.splice(buyerIndex, 1);
  }

}
