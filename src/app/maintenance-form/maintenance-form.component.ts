import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  addMaintenance,
  updateSingleMaintenance,
} from '../car-schedule/store/car-schedule.actions';
import { Maintenance } from '../models/maintenance.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-maintenance-form',
  templateUrl: './maintenance-form.component.html',
  styleUrls: ['./maintenance-form.component.scss'],
})
export class MaintenanceFormComponent implements OnInit {
  inEditMode: boolean = false;
  maintenanceForm = new FormGroup({
    description: new FormControl(''),
    frequency: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<MaintenanceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store
  ) {
    this.inEditMode = this.data != null;
  }

  ngOnInit(): void {
    if (this.inEditMode) {
      this.maintenanceForm.setValue({
        description: this.data.description,
        frequency: this.data.frequency.toString(),
      });
    }
  }

  onSubmit(): void {
    const maintenance: Maintenance = {
      description: this.maintenanceForm.value.description!,
      frequency: Number(this.maintenanceForm.value.frequency!),
      history: [],
    };

    if (!this.inEditMode) {
      this.store.dispatch(addMaintenance({ maintenance }));
    } else {
      this.store.dispatch(
        updateSingleMaintenance({ maintenance, index: this.data.index })
      );
    }

    this.dialogRef.close();
  }
}
