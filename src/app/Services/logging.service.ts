import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  private isLoggedSubject = new BehaviorSubject<boolean>(true);
  isLogged: Observable<boolean> = this.isLoggedSubject.asObservable();

  logStatusChange(email: string, password: string) {
    if (email !== 'INVALID' && password !== 'INVALID') {
      this.isLoggedSubject.next(false);
    }
  }
}
