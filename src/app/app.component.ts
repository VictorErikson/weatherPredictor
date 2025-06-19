import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationService } from './services/location.service';
import { HeaderComponent } from './components/header/header.component';
import { MorningWeatherComponent } from './components/morning-weather/morning-weather.component';
import { DayWeatherComponent } from './components/day-weather/day-weather.component';
import { EveningWeatherComponent } from './components/evening-weather/evening-weather.component';
import { NightWeatherComponent } from "./components/night-weather/night-weather.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, HeaderComponent, MorningWeatherComponent],
  imports: [HeaderComponent, MorningWeatherComponent, DayWeatherComponent, EveningWeatherComponent, NightWeatherComponent, NightWeatherComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherPredictor';
  activeSection = 'morning';
  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getLocation().subscribe({
      next: (location) => {
        if ('coords' in location) {
          console.log('Latitude:', location.coords.latitude);
          console.log('Longitude:', location.coords.longitude);
        } else {
          console.log('IP-based location:', location.city, location.region, location.country);
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
