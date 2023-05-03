import { Component } from '@angular/core';
import {
  faTwitter,
  faFacebook,
  faGoogle,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  twitter = faTwitter;
  facebook = faFacebook;
  google = faGoogle;
  github = faGithub;
}
