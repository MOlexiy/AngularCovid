import { Injectable } from '@angular/core';
import {ApiServiceByStateService} from '../apiservicebystate.service';
import {ApiServiceByHistoricalService} from "../apiservicebyhistorical.service";
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { CountryByDate, DataByCountry } from "./country";

@Injectable()
export class TableService {
    constructor(private apiServiceByStateService: ApiServiceByStateService, private apiServiceByHistoricalService: ApiServiceByHistoricalService){}

    getApiTableByDate(country: string){
       return this.apiServiceByStateService.getCountryByDate(country).pipe(
         map(countries => {
          return countries.map(country => new CountryByDate(country.state, country.lastUpdated, country.confirmedCases, country.fatalCases))
         }),
         catchError(err => of (err))
       )
    }
    getApiTableDateByCountry(country:string){
      return this.apiServiceByHistoricalService.getDateByCountry(country).pipe(
        map(countries => {
          return countries.map((country: any) => new DataByCountry(country.cases, country.date))
        }),
        catchError(err => of (err))
      )
    }
}
