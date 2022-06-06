import {Injectable, ViewChild} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TableByStateService {
  private _dialog: Subject<any> = new Subject<any>();

  get dialog() {
   return  this._dialog.asObservable()
  }

  constructor() { }

  public emitDialog(data:any) {
    this._dialog.next(data);
  }
}
