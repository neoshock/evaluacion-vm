import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isLogedUser(): boolean {
    return localStorage.getItem('user') != null ? true : false;
  }

  logOutUser() {
    localStorage.removeItem('user');
  }

}
