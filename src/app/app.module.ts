import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { HistoryComponent } from './history/history.component';
import { CarScheduleComponent } from './car-schedule/car-schedule.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { carScheduleReducer } from './car-schedule/store/car-schedule.reducer';
import { CarScheduleEffects } from './car-schedule/store/car-schedule.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    MaintenanceComponent,
    HistoryComponent,
    CarScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ carSchedule: carScheduleReducer }, {}),
    EffectsModule.forRoot([CarScheduleEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
