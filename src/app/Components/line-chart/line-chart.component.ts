import { Component } from '@angular/core';
import { chartData } from 'src/Data/chartData';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  data: object[];
  view: [number,number];
  colorScheme: any;

  constructor() {
    this.data = chartData;
    this.view = [1100, 700];
  }
}
