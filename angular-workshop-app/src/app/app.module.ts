import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginStateService } from './services/login-state.service';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { SalutationPipe } from './pipes/salutation.pipe';
import { JsonPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    WelcomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    SalutationPipe,
  ],
  providers: [provideRouter(routes), LoginStateService, SalutationPipe, JsonPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
