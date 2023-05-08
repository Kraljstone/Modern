import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoggingService } from 'src/app/Services/logging.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [{ provide: ErrorStateMatcher, useClass: MyErrorStateMatcher }],
})
export class LoginFormComponent {
  emailFormControl: FormControl = new FormControl('', [
    Validators?.required,
    Validators?.email,
  ]);
  passwordFormControl: FormControl = new FormControl('', [
    Validators?.required,
    Validators?.pattern(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    ),
  ]);

  matcher: MyErrorStateMatcher = new MyErrorStateMatcher();

  constructor(private loggingService: LoggingService) {}

  login(event: Event): void {
    event.preventDefault();
    this.loggingService.logStatusChange(
      this.emailFormControl.status,
      this.passwordFormControl.status
    );
  }
}
