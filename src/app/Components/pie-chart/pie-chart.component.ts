import { Component } from '@angular/core';
import { productSales, productSalesMulti } from 'src/Data/products';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  productSales: any;
  productSalesMulti: any;

  view: [number, number] = [600, 370];

  showLabels: boolean = true;

  gradient: boolean = true;
  isDoughnut: boolean = true;

  colorScheme: any = {
    domain: ['#755a7a', '#201073', '#0d7cf1', '#e9c848', '#dc0641'],
  };

  constructor() {
    Object.assign(this, { productSales, productSalesMulti });
  }

  ngOnInit(): void {}
}
