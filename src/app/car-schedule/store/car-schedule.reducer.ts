import { createReducer, on } from '@ngrx/store';
import { CarSchedule } from 'src/app/models/car-schedule.interface';
import { Car } from 'src/app/models/car.interface';
import { History } from 'src/app/models/history.interface';
import { Maintenance } from 'src/app/models/maintenance.interface';
import * as CarScheduleActions from './car-schedule.actions';
import { getCarScheduleState } from './car-schedule.selectors';

export interface CarScheduleState {
  carSchedule: CarSchedule;
  carScheduleId: string;
}

const initialCar: Car = {
  make: 'N/A',
  model: 'N/A',
  year: 1976,
};

const initialCarSchedule: CarSchedule = {
  car: initialCar,
  maintenances: [],
};

export const initialState: CarScheduleState = {
  carSchedule: initialCarSchedule,
  carScheduleId: '62fbecd44c1416e3b004c6f2',
};

export const carScheduleReducer = createReducer<CarScheduleState>(
  initialState,
  on(
    CarScheduleActions.loadCarScheduleSuccess,
    (state, action): CarScheduleState => {
      return {
        ...state,
        carSchedule: action.carSchedule,
      };
    }
  ),
  on(
    CarScheduleActions.updateMaintenances,
    (state, action): CarScheduleState => {
      return {
        ...state,
        carSchedule: {
          ...state.carSchedule,
          maintenances: action.maintenances,
        },
      };
    }
  ),
  on(CarScheduleActions.addMaintenance, (state, action): CarScheduleState => {
    return {
      ...state,
      carSchedule: {
        ...state.carSchedule,
        maintenances: [...state.carSchedule.maintenances, action.maintenance],
      },
    };
  }),
  on(
    CarScheduleActions.updateSingleMaintenance,
    (state, action): CarScheduleState => {
      return {
        ...state,
        carSchedule: {
          ...state.carSchedule,
          maintenances: updateSingleMaintenance(
            state.carSchedule.maintenances,
            action.maintenance,
            action.index
          ),
        },
      };
    }
  ),
  on(CarScheduleActions.addHistory, (state, action): CarScheduleState => {
    return {
      ...state,
      carSchedule: {
        ...state.carSchedule,
        maintenances: addHistoryToMaintenance(
          state.carSchedule.maintenances,
          action.history,
          action.index
        ),
      },
    };
  })
);

function updateSingleMaintenance(
  maintenances: Maintenance[],
  maintenance: Maintenance,
  index: number
): Maintenance[] {
  let maintenancesCopy = [...maintenances];
  maintenancesCopy[index] = maintenance;
  return maintenancesCopy;
}

function addHistoryToMaintenance(
  maintenances: Maintenance[],
  history: History,
  index: number
): Maintenance[] {
  let maintenanceCopy = {
    ...maintenances[index],
  };
  maintenanceCopy.history = [...maintenanceCopy.history, history];

  return updateSingleMaintenance(maintenances, maintenanceCopy, index);
}
