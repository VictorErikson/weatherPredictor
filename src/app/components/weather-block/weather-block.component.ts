import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { CloudIconComponent } from '../icons/cloud-icon/cloud-icon.component';

@Component({
  selector: 'app-weather-block',
  imports: [NgIf, CloudIconComponent],
  templateUrl: './weather-block.component.html',
  styleUrls: ['./weather-block.component.scss']
})
export class WeatherBlockComponent {
  @Input({required: true}) icon!: string;
  @Input({required: true}) title!: string;
  @Input({required: true}) temp!: number;
  @Input({required: true}) weather!: string;
  @Input({required: true}) humidity!: number;
  @Input({required: true}) airPressure!: number;
  @Input() expanded!: boolean;
}
