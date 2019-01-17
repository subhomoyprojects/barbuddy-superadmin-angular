import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-drinkmaincontent',
  templateUrl: './drinkmaincontent.component.html',
  styleUrls: ['./drinkmaincontent.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class DrinkmaincontentComponent implements OnInit {

  ngOnInit() {
  }

  constructor(config: NgbTabsetConfig, drinkmodal: NgbModalConfig, private modalService: NgbModal) {
    config.justify = 'center';
    drinkmodal.backdrop = 'static';
    drinkmodal.keyboard = false;
   }

   open(addDrinkManuallyModal) {
    this.modalService.open(addDrinkManuallyModal);
  }

}
