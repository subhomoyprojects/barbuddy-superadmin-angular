import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers
})
export class FoodComponent implements OnInit {

  @ViewChild('myPanel') myPanel: MatExpansionPanel;
    matIcon = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  @ViewChild('myPanel1') myPanel1: MatExpansionPanel;
  matIcon1 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
    config.autoClose = false;
   }
   // Metarial Accordine
  panelOpenState = false;

  ngOnInit() {
    this.myPanel.expandedChange.subscribe((data) => {
      this.matIcon = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });
    this.myPanel1.expandedChange.subscribe((data) => {
      this.matIcon1 = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });
  }

  // Metarial Accordine Axpend by click arrow button
  expandPannel() {
    this.myPanel.expanded = !this.myPanel.expanded;
  }
  expandPannel1() {
    this.myPanel1.expanded = !this.myPanel1.expanded;
  }

}
