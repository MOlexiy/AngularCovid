import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CountryByDate} from "./table/country";
import {Observable} from "rxjs";

const headers = new HttpHeaders()
  .set("x-rapidapi-key", "ed6eb3c0a1msh14f58479f68c8f3p1ac9f0jsn55456b3a42cb")
  .set("x-rapidapi-host", "covidapi6.p.rapidapi.com");

@Injectable({
  providedIn: 'root'
})

export class ApiServiceByStateService {

  constructor(private http: HttpClient) { }

  getCountryByDate(country: string):Observable<CountryByDate[]> {
    return this.http.get<CountryByDate[]>(`https://covidapi6.p.rapidapi.com/country-stats/${country}`, {headers});
  }
}
