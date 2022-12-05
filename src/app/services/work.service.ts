import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private url: string = GlobalService.getUrl();

  constructor() { }

  getWorkDetail(workName: string): Promise<any> {
    const response = fetch(this.url + '/title/' + workName)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log(error));
    return response;
  }
}
