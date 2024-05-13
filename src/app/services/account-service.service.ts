import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { truncate } from 'node:fs';

@Injectable()
export class AccountServiceService {

  constructor() { }
  loggedIn = false;
  login(user: User): boolean {
    if (user.userName == "mursit" && user.password == "12345") {
      this.loggedIn = true;
      if (user.userName == "mursit") {
        localStorage.setItem("isLogged", user.userName);
      }
      return true;
    }
    else {
      return false;
    }

  }

  isLoggedIn() {
    return localStorage.getItem("isLogged")=="mursit"
    ? true
    :false;
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
