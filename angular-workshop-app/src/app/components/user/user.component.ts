import { Component, OnDestroy, OnInit, effect } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { LoginStateService } from 'src/app/services/login-state.service';
import { Subscription, catchError } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/directives/forbiddenNameValidator.directive';
import { SalutationPipe } from 'src/app/pipes/salutation.pipe';
import { JsonPipe } from '@angular/common';

export interface User {
  name?: string;
  surname?: string;
  age?: number | undefined;
  gender?: gender | undefined;
  adress?: {
    postalcode?: number | undefined;
    city?: string;
  }
}

export type gender = "MALE" | "FEMALE" | "UNKNOWN";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  user: User = { age: undefined, name: '', surname: '', gender: undefined, adress: { city: '', postalcode: undefined } };

  username!: string;
  password!: string;

  subscription = new Subscription();

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), forbiddenNameValidator("Max")]),
    surname: new FormControl('', [Validators.required, Validators.minLength(3), forbiddenNameValidator("Max")]),
    age: new FormControl(undefined, [Validators.required, Validators.min(1), Validators.max(120)]),
    gender: new FormControl(undefined, [Validators.required]),
    adress: new FormGroup({
      postalcode: new FormControl(undefined, [Validators.required]),
      city: new FormControl('', [Validators.required])
    })
  })

  get name() { return this.userForm.get('name'); };
  get surname() { return this.userForm.get('surname'); };
  get gender() { return this.userForm.get('gender'); };
  get age() { return this.userForm.get('age'); };
  get postalcode() { return this.userForm.controls.adress.get('postalcode'); };
  get city() { return this.userForm.controls.adress.get('city'); };

  constructor(private loginStateService: LoginStateService, private jsonPipe: JsonPipe) {
    //this.userService.getUserInit().subscribe((data) => { this.user = data });
  }

  ngOnInit(): void {
    this.loginStateService.username$.subscribe((username) => { this.username = username });
    this.loginStateService.password$.subscribe((password) => { this.password = password });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    alert("You have added: " + this.jsonPipe.transform(this.userForm.value));
  }
}
