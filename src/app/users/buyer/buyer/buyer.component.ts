import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Buyer} from '../../../classes/buyer';
import {BuyerService} from '../../../services/buyer.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  @Input() buyer: Buyer;
  @Output() buyerDeleted = new EventEmitter();
  constructor(
    private buyerService: BuyerService
  ) { }

  ngOnInit() {
  }

  delete() {
    this.buyerService.delete(this.buyer.id);
  }

  edit() {

  }

  cancel() {

  }
}
