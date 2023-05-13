import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/get.service';

@Component({
  selector: 'app-recent-sales',
  templateUrl: './recent-sales.component.html',
  styleUrls: ['./recent-sales.component.scss'],
})
export class RecentSalesComponent {
  products: any[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.get('https://fakestoreapi.com/products').subscribe({
      next: (data) => {
        // Success callback
        this.products = data;
      },
      error: (error) => {
        // Error callback
        console.error('An error occurred:', error);
      },
    });
  }
}
