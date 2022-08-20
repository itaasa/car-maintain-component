import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Maintenance } from 'src/app/models/maintenance.interface';
import { CarScheduleState } from './car-schedule.reducer';

export const getCarScheduleState =
  createFeatureSelector<CarScheduleState>('carSchedule');

export const getCarSchedule = createSelector(
  getCarScheduleState,
  (state) => state.carSchedule
);

export const getCarScheduleId = createSelector(
  getCarScheduleState,
  (state) => state.carScheduleId
);

export const getMaintenances = createSelector(
  getCarSchedule,
  (carSchedule) => carSchedule.maintenances
);

export const getMaintenanceByIndex = createSelector(
  getMaintenances,
  (maintenances: Maintenance[], props: { index: number }) =>
    maintenances[props.index]
);
