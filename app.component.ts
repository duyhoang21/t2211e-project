import { Component } from '@angular/core';
import {Car} from "./car.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular 1';

  // Car
  make: string = '';
  model: string = '';
  miles = 1000;

  colors: string[] = ['red', 'blue', 'green', 'purple'];
  cars : Car[] = [];

  addNewCar() {
    console.log(this.make);
    console.log(this.model);
    console.log(this.miles);

    //?
    const newCar : Car = {
      make: this.make,
      model: this.model,
      miles: this.miles
    };

    this.cars.push( newCar );

  }

}
