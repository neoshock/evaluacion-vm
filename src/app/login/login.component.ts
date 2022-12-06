import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = {
    userName: '',
    password: ''
  }

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {

  }

  login() {
    if (this.user.userName == 'premiun' && this.user.password == '123456789') {
      this.userService.login(this.user);
      this.router.navigate(['/home-premiun']);
    }
  }

}
