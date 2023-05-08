import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/get.service';

@Component({
  selector: 'app-recent-sales',
  templateUrl: './recent-sales.component.html',
  styleUrls: ['./recent-sales.component.scss'],
  providers: [DataService],
})
export class RecentSalesComponent {
  products: any[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
