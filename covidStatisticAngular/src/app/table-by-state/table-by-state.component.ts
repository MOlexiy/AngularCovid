import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {CountryByDate} from "../table/country";
import {TableByStateService} from "./table-by-state.service";
import {DialogComponent} from "../dialog/dialog.component";
import {Table} from "primeng/table";

export interface IOpenSideBar {
  table: any,
  indexTable: string,
  isCases?: boolean

}
@Component({
  selector: 'app-table-by-state',
  templateUrl: './table-by-state.component.html',
  styleUrls: ['./table-by-state.component.scss']
})
export class TableByStateComponent implements OnInit, OnDestroy {

  subscription1$!: Subscription;
  newTableElement!: {state: string, lastUpdated: Date, confirmedCases: number, fatalCases: number};
  subscription2$!: Subscription;
  subscriptions: Subscription[] = [];

  tableDataByDate!: CountryByDate[];
  dialog: Observable<any> = new Observable<any>();

  @ViewChild('dialogWindow') dialogWindow!: DialogComponent;
  @ViewChild('table') table!: Table;
  @Input() set apiDataByState(data:CountryByDate[] | null){
    if(data){
      this.tableDataByDate = data;
    }
  }

  openSideBar!: IOpenSideBar;

  constructor(private tableByStateService: TableByStateService) {
    this.dialog = tableByStateService.dialog;
  }

  ngOnInit(): void {
    this.subscription1$ = this.dialog.subscribe(
        (data: {state: string, lastUpdated: Date, confirmedCases: number,  fatalCases:number}) =>
        {
          if(data.state){
            this.newTableElement = {
              state: data.state,
              lastUpdated: data.lastUpdated,
              confirmedCases: data.confirmedCases,
              fatalCases: data.fatalCases
            };
            this.tableDataByDate.unshift(this.newTableElement);
            this.table.value = this.tableDataByDate;
          }
        }
    )

    this.subscriptions.push(this.subscription1$);
  }

  BarCLick(isCases: boolean){
    this.openSideBar = ({table: this.tableDataByDate, indexTable: '1', isCases});
  }
  openNew() {
    this.dialogWindow.countryDialog1 = true;
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
