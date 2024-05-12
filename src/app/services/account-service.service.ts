import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountServiceService {

  constructor() { }
  loggedIn = false;
  login(user: User): boolean {
    if (user.userName == "mursit" && user.password == "12345") {
      this.loggedIn = true;
      if (user.userName) { localStorage.setItem("isLogged", user.userName); }
      return true;
    }
    else {
      this.loggedIn = false;
    }
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
