import { createFeatureSelector, createSelector } from '@ngrx/store';
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
