import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
    config.autoClose = false;
   }

  ngOnInit() {
  }

}
