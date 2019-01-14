import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);
  }
  
  ngOnInit() {}
  
}
