import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightWeatherComponent } from './night-weather.component';

describe('NightWeatherComponent', () => {
  let component: NightWeatherComponent;
  let fixture: ComponentFixture<NightWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NightWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
