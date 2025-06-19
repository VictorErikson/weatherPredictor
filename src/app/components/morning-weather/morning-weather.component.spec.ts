import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningWeatherComponent } from './morning-weather.component';

describe('MorningWeatherComponent', () => {
  let component: MorningWeatherComponent;
  let fixture: ComponentFixture<MorningWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorningWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorningWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
