import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-sales-email',
  templateUrl: './sales-email.component.html',
  styleUrls: ['./sales-email.component.scss'],
})
export class SalesEmailComponent {
  rate: ThemePalette = 'warn';
  sent: ThemePalette = 'primary';
  rateValue = 70;
  sentValue = 40;
}
