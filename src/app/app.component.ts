import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'weatherPredictor';
  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getLocation().subscribe({
      next: (position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
      },
      error: (err) => {
        console.error('Geolocation error:', err);
      }
    });
  }
}
