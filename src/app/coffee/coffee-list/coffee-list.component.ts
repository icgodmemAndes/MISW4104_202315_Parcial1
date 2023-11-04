import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Array<Coffee> = [];

  constructor() { }

  ngOnInit() {
  }

}
