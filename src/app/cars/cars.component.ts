import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  public testCar: Car = {
    make: 'Subaru',
    model: 'BRZ',
    year: 2014,
  };

  constructor() {}

  ngOnInit(): void {}
}
