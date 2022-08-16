import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { HistoryComponent } from './history/history.component';
import { CarScheduleComponent } from './car-schedule/car-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    MaintenanceComponent,
    HistoryComponent,
    CarScheduleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
