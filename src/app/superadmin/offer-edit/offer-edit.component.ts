import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker'; 

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css'],
  providers:[MatDatepickerModule]
})
export class OfferEditComponent implements OnInit {

  public checkboxGroupForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { }  

  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });
  }

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}
