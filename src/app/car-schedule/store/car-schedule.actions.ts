import { createAction, props } from '@ngrx/store';
import { CarSchedule } from 'src/app/models/car-schedule.interface';
import { History } from 'src/app/models/history.interface';
import { Maintenance } from 'src/app/models/maintenance.interface';
const actionName = '[Car Schedule]';

export const loadCarSchedule = createAction(`${actionName} Load Car Schedule`);

export const loadCarScheduleSuccess = createAction(
  `${actionName} Load Car Schedule Success`,
  props<{ carSchedule: CarSchedule }>()
);

export const addMaintenance = createAction(
  `${actionName} Add Maintenance`,
  props<{ maintenance: Maintenance }>()
);

export const updateSingleMaintenance = createAction(
  `${actionName} Edit Maintenance`,
  props<{ maintenance: Maintenance; index: number }>()
);

export const addHistory = createAction(
  `${actionName} Add History`,
  props<{ history: History; index: number }>()
);

export const updateMaintenances = createAction(
  `${actionName} Update Maintenance`,
  props<{ maintenances: Maintenance[] }>()
);

export const updateMaintenanceSuccess = createAction(
  `${actionName} Update Maintenance Success`,
  props<{ updatedId: string }>()
);
