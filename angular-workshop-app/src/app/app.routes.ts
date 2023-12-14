import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'registration',
        component: RegistrationComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
