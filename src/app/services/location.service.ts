import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  getLocation(): Observable<GeolocationPosition | {city: string; region: string; country: string}> {
    return new Observable((observer) => {
      if (!navigator.geolocation) {
        this.fetchIpLocation(observer)
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          observer.next(pos);
          observer.complete();
        },
        () => {
          this.fetchIpLocation(observer);
        }
      );
    });
  }

  private fetchIpLocation(observer: any) {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        observer.next({
          city: data.city,
          region: data.region,
          country: data.country
        });
        observer.complete();
      })
      .catch(err => {
        observer.error('Both geolocation and IP fallback failed: ' + err);
      });
  }
}
