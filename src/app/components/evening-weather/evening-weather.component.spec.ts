import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveningWeatherComponent } from './evening-weather.component';

describe('EveningWeatherComponent', () => {
  let component: EveningWeatherComponent;
  let fixture: ComponentFixture<EveningWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EveningWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EveningWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
