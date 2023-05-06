import { Component } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';
import { chartData } from 'src/Data/chartData';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  data: object[];
  view: any;
  colorScheme: any;

  constructor() {
    this.data = chartData;
    this.view = [940, 700];
  }
}
