import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private url: string = GlobalService.getUrl();
  private authors: Array<string> = [];
  private subject = new Subject<any>();

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

  saveAuthorInLocalStorage(author: string) {
    this.authors = JSON.parse(localStorage.getItem('authors')!);
    this.authors.push(author);
    localStorage.setItem('authors', JSON.stringify(this.authors));
  }

  getAllAuthorsSaved() {
    return JSON.parse(localStorage.getItem('authors')!);
  }

  deleteAuthorSaved(authorName: string) {
    let index: any = 0;
    this.authors = JSON.parse(localStorage.getItem('authors')!);
    this.authors.find((e, i) => e == authorName ? index = i : 0);
    this.authors.splice(index, 1);
    localStorage.setItem('authors', JSON.stringify(this.authors));
  }

  setUpdateCount() {
    this.subject.next("");
  }

  getUpdateCount(): Observable<any> {
    return this.subject.asObservable();
  }

}
