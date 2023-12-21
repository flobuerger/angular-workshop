import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl: string = "http://localhost:3000";

  private user = new BehaviorSubject<User>({ name: "", surname: "", age: undefined, gender: undefined, adress: { city: "", postalcode: undefined } });
  user$ = this.user.asObservable();

  constructor(private httpClient: HttpClient) {

  }

  getUserInit(): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + "/get-object");
  }

  setUser(user: User) {
    this.user.next(user);
  }
}
