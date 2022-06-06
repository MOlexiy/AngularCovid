import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'covidStatisticAngular';
  countryName: string = '';

  getCountryName(event: string) {
    this.countryName = event;
    //console.debug('event', event);
  }
}
