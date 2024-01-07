import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-AuthButton',
  templateUrl: './authButton.component.html',
  styleUrls: ['./authButton.component.scss']
})
export class AuthButtonComponent {
    constructor(public auth: AuthService) {}
    public Logout() {
        this.auth.logout({logoutParams: { returnTo: window.location.origin }});
    }
}
