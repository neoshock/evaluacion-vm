import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private static url: string = "https://poetrydb.org";

  constructor() { }

  public static getUrl() {
    return this.url;
  }
}
