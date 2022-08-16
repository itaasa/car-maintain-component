import { Component, OnInit } from '@angular/core';
import { oilMaintenance } from '../mocks/maintenance-mocks';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent implements OnInit {
  public maintenance = oilMaintenance;

  constructor() {}

  ngOnInit(): void {}
}
