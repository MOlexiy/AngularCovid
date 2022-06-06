import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {DataByCountry} from "../table/country";
import {DialogComponent} from "../dialog/dialog.component";
import { IOpenSideBar } from "../table-by-state/table-by-state.component";
import {TableByStateService} from "../table-by-state/table-by-state.service";
import {Table} from "primeng/table";

@Component({
  selector: 'app-table-by-historical',
  templateUrl: './table-by-historical.component.html',
  styleUrls: ['./table-by-historical.component.scss']
})
export class TableByHistoricalComponent implements OnInit, OnDestroy {

  subscription1$!: Subscription;
  subscription2$!: Subscription;
  subscriptions: Subscription[] = [];
  newTableElement!: {cases: number, date: Date};

  tableDataByCountry!: DataByCountry[];
  dialog: Observable<any> = new Observable<any>();

  @ViewChild('dialogWindow') dialogWindow!: DialogComponent;
  @ViewChild('table') table!: Table;
  @Input() set apiDataByDate(data: DataByCountry[] | null){
    if(data){
      this.tableDataByCountry = data;
    }
  }

  openSideBar!: IOpenSideBar;

  constructor(private tableByStateService: TableByStateService) {
    this.dialog = tableByStateService.dialog;
  }

  ngOnInit(): void {
    this.subscription1$ = this.dialog.subscribe(
      (data: {date: Date, cases: number} ) =>
      {
        if(data.cases){
          this.newTableElement = {
            cases: data.cases,
            date: data.date
          };
          this.tableDataByCountry.push(this.newTableElement);
          this.table.value = this.tableDataByCountry;
          console.debug(this.tableDataByCountry);
        }
      }
    )
    this.subscriptions.push(this.subscription1$);
  }

  openNew() {
    this.dialogWindow.countryDialog2 = true;
  }

  LineClickInTableDateByCounty(){
    this.openSideBar =  ({table: this.tableDataByCountry, indexTable: '2'});
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
