import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}
  
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);
  }

}
