import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CarSchedule } from '../models/car-schedule.interface';
import { getCarSchedule } from './store/car-schedule.selectors';
import { loadCarSchedule } from './store/car-schedule.actions';

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
}
