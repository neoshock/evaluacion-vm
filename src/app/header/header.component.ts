import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Work } from '../models/work';
import { AuthorService } from '../services/author.service';
import { UserService } from '../services/user.service';
import { WorkService } from '../services/work.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public authorsSaved: Array<string> = [];
  public worksSaved: Array<Work> = [];
  private clickEventsubscription: Subscription | undefined;

  constructor(private userService: UserService, private authorService: AuthorService, private workService: WorkService) {
    this.clickEventsubscription = this.authorService.getUpdateCount().subscribe(() => {
      this.updateCount();
    });
  }

  ngOnInit(): void {
    this.updateCount();
  }

  updateCount() {
    this.authorsSaved = this.authorService.getAllAuthorsSaved();
    this.worksSaved = this.workService.getAllWorksOfLocalStorage();
  }

  deleteAuthor(authorName: string) {
    this.authorService.deleteAuthorSaved(authorName);
    this.authorsSaved = this.authorService.getAllAuthorsSaved();
  }

  deleteWork(workName: string) {
    this.workService.deleteWorkSaved(workName);
    this.worksSaved = this.workService.getAllWorksOfLocalStorage();
  }

  isLogedUser(): boolean {
    return this.userService.isLogedUser();
  }

  logOut() {
    this.userService.logOutUser();
  }

}
