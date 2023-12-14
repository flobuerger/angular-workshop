import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginStateService {
  username = new BehaviorSubject<string>("")
  username$ = this.username.asObservable();

  password = new BehaviorSubject<string>("")
  password$ = this.password.asObservable();

  setUsername(username: string) {
    this.username.next(username);
  }

  setPassword(password: string) {
    this.password.next(password);
  }
}
