import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-barlisting',
  templateUrl: './barlisting.component.html',
  styleUrls: ['./barlisting.component.css'],
  providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers
})
export class BarlistingComponent implements OnInit {

  @ViewChild('myPanel') myPanel: MatExpansionPanel;
    matIcon = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  constructor(config: NgbDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    config.placement = 'bottom-right';
    config.autoClose = false;
  }

  // Metarial Accordine
  panelOpenState = false;

  ngOnInit() {
    this.myPanel.expandedChange.subscribe((data) => {
      this.matIcon = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
  });
  }

  // Metarial Accordine Axpend by click arrow button
  expandPannel() {
    this.myPanel.expanded = !this.myPanel.expanded;
  }

}
