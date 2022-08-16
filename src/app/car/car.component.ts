import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../models/car.interface';
import { subaruBrz } from '../mocks/car-mocks';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  @Input() car: Car = subaruBrz;

  constructor() {}

  ngOnInit(): void {}
}
