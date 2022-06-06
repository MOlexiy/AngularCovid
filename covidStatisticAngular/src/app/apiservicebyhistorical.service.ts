import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataByCountry} from "./table/country";

const headers = new HttpHeaders()
  .set("x-rapidapi-key", "ed6eb3c0a1msh14f58479f68c8f3p1ac9f0jsn55456b3a42cb")
  .set("x-rapidapi-host", "covidapi6.p.rapidapi.com");


@Injectable({
  providedIn: 'root'
})
export class ApiServiceByHistoricalService {

  constructor(private http: HttpClient) { }

  getDateByCountry(country: string):Observable<any>{
    return this.http.get<DataByCountry[]>(`https://covidapi6.p.rapidapi.com/country-timeline/${country}`, {headers});
  }
}
