import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherBlockComponent } from '../weather-block/weather-block.component';

@Component({
  selector: 'app-night-weather',
  imports: [WeatherBlockComponent],
  templateUrl: './night-weather.component.html',
  styleUrl: './night-weather.component.scss'
})
export class NightWeatherComponent {
 @Input({required: true}) icon!: string;
  @Input({required: true}) title!: string;
  @Input({required: true}) temp!: number;
  @Input({required: true}) weather!: string;
  @Input({required: true}) humidity!: number;
  @Input({required: true}) airPressure!: number;
  @Input() expanded: boolean = false;
  @Input() sectionId: string = 'morning';
  @Output() clicked = new EventEmitter<string>();

  onClick() {
    this.clicked.emit(this.sectionId);
  }
}
