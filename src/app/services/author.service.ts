import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private url: string = GlobalService.getUrl();

  constructor() { }

  getAllAuthors(): Promise<any> {
    const response = fetch(this.url + '/author')
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log(error));
    return response;
  }

  getAuthorWorks(author: string): Promise<any> {
    const response = fetch(this.url + '/author/' + author + '/title')
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log(error));
    return response;
  }

}
