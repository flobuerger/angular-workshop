import { Component } from '@angular/core';

type gender = "MALE" | "FEMALE";

interface user {
  name: string;
  gender: gender;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-workshop-app';

  shouldShow: boolean = true;

  arr: string[] = ["Susi", "Maxi", "Strolchi"];

  user_sepp: user = {
    name: 'Sepp',
    gender: 'FEMALE'
  }

  currentDate: Date = new Date();

  toggleText(): void {
    this.shouldShow = !this.shouldShow;
  }
}
