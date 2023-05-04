import { Component } from '@angular/core';
import { LoggingService } from './Services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggingService],
})
export class AppComponent {
  isLogged:boolean = true;

  constructor(private loggingService: LoggingService) {}

  ngOnInit():void {
    this.loggingService.isLogged.subscribe((isLogged:boolean) => {
      this.isLogged = isLogged;
    });
  }
}
