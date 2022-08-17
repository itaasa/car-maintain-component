import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarSchedule } from './models/car-schedule.interface';

@Injectable({
  providedIn: 'root',
})
export class CarScheduleService {
  private apiUrl = 'http://localhost:3001/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  public getCarSchedule(id: string): Observable<CarSchedule> {
    const url = this.apiUrl + `car-schedule/${id}`;
    return this.httpClient.get<CarSchedule>(url);
  }

  public updateMaintenance(carSchedule: CarSchedule): Observable<string> {
    const url = this.apiUrl + `car-schedule/maintenance`;
    return this.httpClient.put<string>(url, carSchedule, this.httpOptions);
  }
}
