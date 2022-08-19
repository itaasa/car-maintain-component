import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateMaintenance } from '../car-schedule/store/car-schedule.actions';
import { getCarSchedule } from '../car-schedule/store/car-schedule.selectors';
import { mockCarSchedule } from '../mocks/car-schedule-mocks';
import { CarSchedule } from '../models/car-schedule.interface';
import { History } from '../models/history.interface';
import { Maintenance } from '../models/maintenance.interface';

@Component({
  selector: 'app-maintenance-form',
  templateUrl: './maintenance-form.component.html',
  styleUrls: ['./maintenance-form.component.scss'],
})
export class MaintenanceFormComponent implements OnInit {
  maintenanceForm = new FormGroup({
    description: new FormControl(''),
    frequency: new FormControl(''),
  });

  constructor(private store: Store) {}
  ngOnInit(): void {}

  onSubmit(): void {
    const newMaintenance: Maintenance = {
      description: this.maintenanceForm.value.description!,
      frequency: Number(this.maintenanceForm.value.frequency!),
      history: [],
    };

    let newCarSchedule: CarSchedule = mockCarSchedule;
    this.store
      .select(getCarSchedule)
      .subscribe((carSchedule) => (newCarSchedule = carSchedule));

    let maintenances = newCarSchedule.maintenances;

    maintenances = [...newCarSchedule.maintenances, newMaintenance];

    this.store.dispatch(updateMaintenance({ maintenances }));
  }
}
