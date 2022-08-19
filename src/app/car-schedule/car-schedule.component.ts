import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CarSchedule } from '../models/car-schedule.interface';
import { getCarSchedule } from './store/car-schedule.selectors';
import { loadCarSchedule } from './store/car-schedule.actions';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaintenanceFormComponent } from '../maintenance-form/maintenance-form.component';

@Component({
  selector: 'app-car-schedule',
  templateUrl: './car-schedule.component.html',
  styleUrls: ['./car-schedule.component.scss'],
})
export class CarScheduleComponent implements OnInit {
  public carSchedule$: Observable<CarSchedule>;

  constructor(private store: Store, public dialog: MatDialog) {
    this.carSchedule$ = this.store.select(getCarSchedule);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCarSchedule());
  }

  addMaintenance(): void {
    let dialogRef = this.dialog.open(MaintenanceFormComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
