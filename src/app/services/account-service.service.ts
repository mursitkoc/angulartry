import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { User } from '../login/user';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AccountServiceService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  login(user: User): boolean {
    if (user.userName == "mursit" && user.password == "12345") {
      if (user.userName == "mursit") {
        window.localStorage.setItem("isLogged", user.userName);
      }
      return true;
    }
    else {
      return false;
    }

  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return window.localStorage.getItem("isLogged") === "mursit"
       ? true
        : false;
    } else {
      return false;
    }
  }

  logOut() {
    window.localStorage.removeItem("isLogged");
  }
}
