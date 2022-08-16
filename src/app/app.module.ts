import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [AppComponent, CarsComponent, MaintenanceComponent, HistoryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
