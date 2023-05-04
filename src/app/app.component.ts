import { Component } from '@angular/core';
import { LoggingService } from './Services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggingService],
})
export class AppComponent {
  isLogged = true;

  constructor(private loggingService: LoggingService) {}

  ngOnInit() {
    this.loggingService.isLogged.subscribe((isLogged) => {
      this.isLogged = isLogged;
    });
  }
}
