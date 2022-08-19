import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  addMaintenance,
  updateMaintenance,
} from '../car-schedule/store/car-schedule.actions';
import { Maintenance } from '../models/maintenance.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { TemplateBindingParseResult } from '@angular/compiler';

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

  constructor(
    public dialogRef: MatDialogRef<MaintenanceFormComponent>,
    private store: Store
  ) {}
  ngOnInit(): void {}

  onSubmit(): void {
    const maintenance: Maintenance = {
      description: this.maintenanceForm.value.description!,
      frequency: Number(this.maintenanceForm.value.frequency!),
      history: [],
    };

    this.store.dispatch(addMaintenance({ maintenance }));

    this.dialogRef.close();
  }
}
