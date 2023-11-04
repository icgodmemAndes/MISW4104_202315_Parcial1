import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Array<Coffee> = [];
  sumOrigen: number = 0;
  sumBlend: number = 0;
  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.getCoffees();
  }

  getCoffees() {
    this.coffeeService.getCoffees().subscribe(coffees => {
      this.coffees = coffees;
      this.getCountCoffees(coffees);
    });
  }

  getCountCoffees(coffees: Array<Coffee>): void {
    this.sumOrigen = coffees.filter(coffee => coffee.tipo === 'Café de Origen').length;
    this.sumBlend = coffees.filter(coffee => coffee.tipo === 'Blend').length;
  }

}
