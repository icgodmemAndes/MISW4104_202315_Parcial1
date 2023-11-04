/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CoffeeListComponent } from './coffee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoffeeListComponent ],
      providers: [CoffeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const coffee = new Coffee(
        faker.number.int(),
        faker.commerce.productName(),
        faker.lorem.sentence(), 
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.image.imageUrl(),
      );
      component.coffees.push(coffee);
    }
    

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 3 <tr.fila> elements', () => {
    expect(debug.queryAll(By.css('tr.fila'))).toHaveSize(3)
  });

  it('should have 3 elements in coffee list', () => {
    expect(component.coffees).toHaveSize(3);
  });
 
});
