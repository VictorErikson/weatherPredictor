import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherBlockComponent } from '../weather-block/weather-block.component';

@Component({
  selector: 'app-morning-weather',
  imports: [WeatherBlockComponent],
  templateUrl: './morning-weather.component.html',
  styleUrl: './morning-weather.component.scss'
})
export class MorningWeatherComponent {
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
