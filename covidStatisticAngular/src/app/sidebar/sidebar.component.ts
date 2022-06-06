import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CountryByDate, DataByCountry} from "../table/country";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  visibleSidebar!: boolean;
  visibleSidebarData!: boolean;

  chartData: any;

  @Input()  set dataForSideBar(data: any) {
    if(data){
      if(data.indexTable === '1') {
        this.transformTableDate(data.table, data.isCases);
      }
      if(data.indexTable === '2'){
        this.transformTableData(data.table);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
  transformTableDate(table: CountryByDate[], column: boolean){
    this.visibleSidebar = true;
    this.chartData = table.map((county: any, index: number) =>  {
      if (index === 0){
        return {state:county.state, date:county.lastUpdated, n1:county.confirmedCases, n2:county.fatalCases, column: column}
      }
      if (index === 1){
        return {date:county.lastUpdated, n1:county.confirmedCases, n2:county.fatalCases, column: column}
      }
      if(index % 2 === 0){
        return {state:county.state, n1:county.confirmedCases, n2:county.fatalCases}
      }
      return {n1:county.confirmedCases, n2:county.fatalCases};
    })
  }
  transformTableData(table: DataByCountry[]){
    this.visibleSidebarData = true;
    this.chartData = table.map((data: any) => {
      if(data.cases){
        return {cases:data.cases, date:data.date}
      }
      return {}
    })
  }
}
