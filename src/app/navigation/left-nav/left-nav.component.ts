import { Component, OnInit } from '@angular/core';
import {CONFIG} from '../../config/config';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  title = CONFIG.app_name;

  constructor() { }

  ngOnInit() {
  }

}
