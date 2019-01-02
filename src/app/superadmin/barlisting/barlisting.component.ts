import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-barlisting',
  templateUrl: './barlisting.component.html',
  styleUrls: ['./barlisting.component.css'],
  providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers
})
export class BarlistingComponent implements OnInit {

  constructor(config: NgbDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    config.placement = 'bottom-right';
    config.autoClose = false;
  }

  // Metarial Accordine
  panelOpenState = false;

  ngOnInit() {
  }

}
