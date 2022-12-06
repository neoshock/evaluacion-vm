import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isLogedUser(): boolean {
    return this.userService.isLogedUser();
  }

  logOut() {
    this.userService.logOutUser();
  }

}
