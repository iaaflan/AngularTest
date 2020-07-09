import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User, Role } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  user: User;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe((x) => (this.user = x));
  }

  get isAdmin() {
    return (
      this.user &&
      (this.user.role === Role.Admin ||
        this.user.role === Role.SuperAdmin ||
        this.user.role === Role.SystemAdmin)
    );
  }

  get isSuper() {
    return (
      this.user &&
      (this.user.role === Role.SuperAdmin ||
        this.user.role === Role.SystemAdmin)
    );
  }

  get isSystem() {
    return this.user && this.user.role === Role.SystemAdmin;
  }

  logout() {
    this.authenticationService.logout();
  }
}
