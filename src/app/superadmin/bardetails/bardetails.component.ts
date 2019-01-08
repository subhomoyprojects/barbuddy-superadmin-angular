import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup}   from '@angular/forms';

@Component({
  selector: 'app-bardetails',
  templateUrl: './bardetails.component.html',
  styleUrls: ['./bardetails.component.css']
})
export class BardetailsComponent implements OnInit {

  // Validators
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' :'';
  }

  // Validators
  text = new FormControl('', [Validators.required]);

  getInputErrorMessage() {
    return this.text.hasError('required') ? 'You must enter a value':'';
  }
  options: FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

}
