import { Injectable } from '@angular/core';
import * as countries from '../../assets/countries.json';
import { ICountry } from "./icountry";

@Injectable()
export class CountryService {
  countries: ICountry[];

  constructor() {
    const { data } = countries;
    this.countries = data;
  }
  getCountries() {
    return this.countries;
  }
}
