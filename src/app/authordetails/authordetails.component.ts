import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Work } from '../models/work';
import { WorkDetail } from '../models/work-detail';
import { AuthorService } from '../services/author.service';
import { UserService } from '../services/user.service';
import { WorkService } from '../services/work.service';

@Component({
  selector: 'app-authordetails',
  templateUrl: './authordetails.component.html',
  styleUrls: ['./authordetails.component.scss']
})
export class AuthordetailsComponent implements OnInit {

  public works: Array<Work> = [];
  public authorName: string = "";
  public workDetail: WorkDetail = {};

  constructor(private activateRoute: ActivatedRoute, private authorService: AuthorService,
    private workService: WorkService, private userService: UserService) {

  }

  ngOnInit(): void {
    const name = this.activateRoute.snapshot.paramMap.get('name');
    this.authorName = name!;
    this.loadAuthorWorks(name!);
  }

  loadAuthorWorks(authorName: string) {
    this.authorService.getAuthorWorks(authorName).then(
      result => this.works = result
    )
  }

  showWorkDetail(name: string) {
    this.workService.getWorkDetail(name).then(
      result => this.workDetail = result[0]
    )
  }

  addWorkToFavorite(work: Work) {
    this.workService.saveWorkinLocalStorage(work);
    this.authorService.setUpdateCount();
  }

  isLogedUser(): boolean {
    return this.userService.isLogedUser();
  }

}
