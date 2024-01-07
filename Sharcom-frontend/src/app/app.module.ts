import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/authButton/authButton.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
        domain: 'sharcom.eu.auth0.com',
        clientId: 'i3wUmGYhowyE9LDKiufnO2zEtp9s9srI',
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
