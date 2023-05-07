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

  view: any = [600, 370];

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

  onActivate(data: Event): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: Event): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data: Event): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}
