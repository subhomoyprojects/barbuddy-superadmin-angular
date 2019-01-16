import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-drinkmaincontent',
  templateUrl: './drinkmaincontent.component.html',
  styleUrls: ['./drinkmaincontent.component.css']
})
export class DrinkmaincontentComponent implements OnInit {

  ngOnInit() {
  }

  constructor(config: NgbTabsetConfig) {
    config.justify = 'center';
   }

}
