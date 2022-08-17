import { createAction, props } from '@ngrx/store';
import { CarSchedule } from 'src/app/models/car-schedule.interface';
const actionName = '[Car Schedule]';

export const loadCarSchedule = createAction(`${actionName} Load Car Schedule`);

export const loadCarScheduleSuccess = createAction(
  `${actionName} Load Car Schedule Success`,
  props<{ carSchedule: CarSchedule }>()
);

export const updateMaintenance = createAction(
  `${actionName} Update Maintenance`,
  props<{ carSchedule: CarSchedule }>()
);

export const updateMaintenanceSuccess = createAction(
  `${actionName} Update Maintenance Success`,
  props<{ updatedId: string }>()
);
