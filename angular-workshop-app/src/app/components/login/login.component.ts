import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginStateService } from 'src/app/services/login-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;

  displayUsername!: string;
  displayPassword!: string;

  subscription = new Subscription();

  constructor(private loginStateService: LoginStateService) {

    this.subscription.add(
      this.loginStateService.username$.subscribe((username) => this.displayUsername = username
      ));

    this.subscription.add(
      this.loginStateService.password$.subscribe((password) => this.displayPassword = password
      )
    );
  }

  setLogin() {
    this.loginStateService.setUsername(this.username);
    this.loginStateService.setPassword(this.password);
  }
}
