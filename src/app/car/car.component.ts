import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../models/car.interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  @Input() car: Car = {
    make: 'Subaru',
    model: 'BRZ',
    year: 2014,
  };

  constructor() {}

  ngOnInit(): void {}
}
