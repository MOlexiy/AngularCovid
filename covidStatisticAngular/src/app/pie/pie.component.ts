import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html'
})
export class PieComponent{

  basicData: any;
  labelsState: string[] = [];
  labelDataYesterday!: Date;
  dataYesterday: number[] = [];
  labelDataToday!: Date;
  dataToday: number[] = [];
  column: boolean = true;

  @Input() set chartData(data: any) {
    let j = 0;
    if (data){
      this.labelsState = [];
      this.dataToday = [];
      this.dataYesterday = [];
      for (let i = 0; i < data.length; i++){
        if (i === 0){
          this.labelDataYesterday = data[i].date;
          this.column = data[i].column;
        }
        if (i === 1){
          this.labelDataToday = data[i].date;
        }
        if (this.column){
          if (i % 2 === 0){
            this.dataYesterday[j] = data[i].n1;
            this.labelsState[j] = data[i].state;
          }
          if (i % 2 !== 0){
            this.dataToday[j] = data[i].n1;
            j++;
          }
        }
        if (!this.column){
          if (i % 2 === 0){
            this.dataYesterday[j] = data[i].n2;
            this.labelsState[j] = data[i].state;
          }
          if (i % 2 !== 0){
            this.dataToday[j] = data[i].n2;
            j++;
          }
        }
      }
    }
    this.basicData =
      {
        labels: this.labelsState,
        datasets: [
          {
            label: this.labelDataYesterday,
            backgroundColor: '#42A5F5',
            data: this.dataYesterday
          },
          {
            label: this.labelDataToday,
            backgroundColor: '#FFA726',
            data: this.dataToday
          }
        ]
    }
  };


  constructor() {}
}
