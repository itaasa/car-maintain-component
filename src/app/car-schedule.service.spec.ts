import { TestBed } from '@angular/core/testing';

import { CarScheduleService } from './car-schedule.service';

describe('CarScheduleService', () => {
  let service: CarScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
