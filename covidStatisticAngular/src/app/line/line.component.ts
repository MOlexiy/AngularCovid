import {Component, Input, OnInit} from '@angular/core';
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  basicData: any;
  labelData: string[] = [];
  casesInCountry: number[] = [];

  @Input() set chartData(data: any) {
    let j = 0;
    if (data){
      this.labelData = [];
      this.casesInCountry = [];
      for (let i = 0; i < data.length; i++){
        if(data[i].cases){
          this.labelData[j] = data[i].date;
          this.labelData[j] = formatDate(this.labelData[j], 'd / M / yyyy', 'ru', 'undefined');
          this.casesInCountry[j] = data[i].cases;
          j++;
        }
      }
    }

    this.basicData = {
      labels: this.labelData,
      datasets: [
        {
          label: 'Number of people',
          data: this.casesInCountry,
          fill: false,
          borderColor: '#42A5F5',
          tension: .4
        }
      ]
    };
  }

  constructor() { }
  ngOnInit(): void {
  }

}
