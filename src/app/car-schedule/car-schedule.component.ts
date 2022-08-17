import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CarSchedule } from '../models/car-schedule.interface';
import { getCarSchedule } from './store/car-schedule.selectors';
import {
  loadCarSchedule,
  updateMaintenance,
} from './store/car-schedule.actions';
import { Maintenance } from '../models/maintenance.interface';
import { History } from '../models/history.interface';
import { Car } from '../models/car.interface';
import { mockCarSchedule } from '../mocks/car-schedule-mocks';

@Component({
  selector: 'app-car-schedule',
  templateUrl: './car-schedule.component.html',
  styleUrls: ['./car-schedule.component.scss'],
})
export class CarScheduleComponent implements OnInit {
  public carSchedule$: Observable<CarSchedule>;

  constructor(private store: Store) {
    this.carSchedule$ = this.store.select(getCarSchedule);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCarSchedule());
  }

  addMaintenance(): void {
    let testCarSchedule: CarSchedule = mockCarSchedule;

    this.store
      .select(getCarSchedule)
      .subscribe((carSchedule) => (testCarSchedule = carSchedule));

    const history: History = {
      dateCompleted: new Date(),
      mileage: 190000,
      cost: 500.0,
    };

    const maintenance: Maintenance = {
      description: 'Change Spark Plugs',
      frequency: 100000,
      history: [history],
    };

    let copyMaintenances = testCarSchedule.maintenances;

    copyMaintenances = [...testCarSchedule.maintenances, maintenance];

    testCarSchedule = {
      ...testCarSchedule,
      maintenances: copyMaintenances,
    };

    this.store.dispatch(updateMaintenance({ carSchedule: testCarSchedule }));
  }
}
