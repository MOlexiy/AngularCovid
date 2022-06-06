import {Component, Input} from '@angular/core';
import { TableService } from './tableservice';
import { Observable } from "rxjs";
import {CountryByDate, DataByCountry} from "./country";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['/table.component.scss']
})

export class TableComponent {
  tableDataByDate$: Observable<CountryByDate[]> = new Observable<CountryByDate[]>();
  tableDataByCountry$: Observable<DataByCountry[]> = new Observable<DataByCountry[]>();

  @Input() set pullCountryName(val: string) {
    if (!!val) {
      this.tableDataByDate$ =  this.tableService.getApiTableByDate(val);
      this.tableDataByCountry$ = this.tableService.getApiTableDateByCountry(val);
    }
  }
  constructor(private tableService: TableService) {}

}
