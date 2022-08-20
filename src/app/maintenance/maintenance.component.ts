import { Component, Input, OnInit } from '@angular/core';
import { oilMaintenance } from '../mocks/maintenance-mocks';
import { Maintenance } from '../models/maintenance.interface';
import { MatDialog } from '@angular/material/dialog';
import { MaintenanceFormComponent } from '../maintenance-form/maintenance-form.component';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent implements OnInit {
  @Input() maintenance: Maintenance = oilMaintenance;
  @Input() index: number = -1;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  editMaintenance(): void {
    this.dialog.open(MaintenanceFormComponent, {
      width: '1000px',
      data: {
        description: this.maintenance.description,
        frequency: this.maintenance.frequency,
        history: this.maintenance.history,
        index: this.index,
      },
    });
  }
}
