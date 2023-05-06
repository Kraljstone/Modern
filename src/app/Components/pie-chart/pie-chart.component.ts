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

  gradient: boolean = false;
  isDoughnut: boolean = true;

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F'],
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
