import { Component, OnInit } from '@angular/core';
import { mockCarSchedule } from '../mocks/car-schedule-mocks';

@Component({
  selector: 'app-car-schedule',
  templateUrl: './car-schedule.component.html',
  styleUrls: ['./car-schedule.component.scss'],
})
export class CarScheduleComponent implements OnInit {
  public carSchedule = mockCarSchedule;
  constructor() {}

  ngOnInit(): void {}
}
