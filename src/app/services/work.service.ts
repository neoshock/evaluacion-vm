import { Injectable } from '@angular/core';
import { Work } from '../models/work';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private url: string = GlobalService.getUrl();
  private works: Array<Work> = [];

  constructor() { }

  getWorkDetail(workName: string): Promise<any> {
    const response = fetch(this.url + '/title/' + workName)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log(error));
    return response;
  }

  saveWorkinLocalStorage(work: Work) {
    this.works = JSON.parse(localStorage.getItem('works')!);
    this.works.push(work);
    localStorage.setItem('works', JSON.stringify(this.works));
  }

  getAllWorksOfLocalStorage() {
    return JSON.parse(localStorage.getItem('works')!);
  }

  deleteWorkSaved(workName: string) {
    let index: any = 0;
    this.works = JSON.parse(localStorage.getItem('works')!);
    this.works.find((e, i) => e.title == workName ? index = i : 0);
    this.works.splice(index, 1);
    localStorage.setItem('works', JSON.stringify(this.works));
  }
}
