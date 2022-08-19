import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CarScheduleService } from 'src/app/car-schedule.service';
import { CarScheduleState } from './car-schedule.reducer';
import * as CarScheduleActions from './car-schedule.actions';
import { withLatestFrom, switchMap, map } from 'rxjs';
import { getCarScheduleId, getCarSchedule } from './car-schedule.selectors';

@Injectable()
export class CarScheduleEffects {
  constructor(
    private store: Store<CarScheduleState>,
    private actions$: Actions,
    private carScheduleService: CarScheduleService
  ) {}

  loadCarSchedule$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        CarScheduleActions.loadCarSchedule,
        CarScheduleActions.updateMaintenanceSuccess
      ),
      withLatestFrom(this.store.select(getCarScheduleId)),
      switchMap(([_, carScheduleId]) =>
        this.carScheduleService
          .getCarSchedule(carScheduleId)
          .pipe(
            map((carSchedule) =>
              CarScheduleActions.loadCarScheduleSuccess({ carSchedule })
            )
          )
      )
    );
  });

  updateMaintenance$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        CarScheduleActions.updateMaintenances,
        CarScheduleActions.addMaintenance,
        CarScheduleActions.updateSingleMaintenance
      ),
      withLatestFrom(this.store.select(getCarSchedule)),
      switchMap(([_, carSchedule]) =>
        this.carScheduleService
          .updateMaintenance(carSchedule)
          .pipe(
            map((updatedId) =>
              CarScheduleActions.updateMaintenanceSuccess({ updatedId })
            )
          )
      )
    );
  });
}
