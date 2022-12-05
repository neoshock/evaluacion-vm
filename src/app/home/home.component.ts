import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public authors: [] = [];

  constructor(private authorService: AuthorService, private router: Router) {

  }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors() {
    this.authorService.getAllAuthors().then(
      result => this.authors = result.authors
    )
  }

  loadAuthorDetail(authorName: string) {
    this.router.navigate(['/author', { name: authorName }]);
  }

}
