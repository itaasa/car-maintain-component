import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarScheduleComponent } from './car-schedule.component';

describe('CarScheduleComponent', () => {
  let component: CarScheduleComponent;
  let fixture: ComponentFixture<CarScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
