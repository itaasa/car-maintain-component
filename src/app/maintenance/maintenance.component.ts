import { Component, Input, OnInit } from '@angular/core';
import { oilMaintenance } from '../mocks/maintenance-mocks';
import { Maintenance } from '../models/maintenance.interface';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent implements OnInit {
  @Input() maintenance: Maintenance = oilMaintenance;

  constructor() {}

  ngOnInit(): void {}
}
