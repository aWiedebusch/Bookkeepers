import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {


  returnable: any

  constructor(public http: Http) {
  }

  getBook(isbn) {

    return this.http.get(`http://isbndb.com/api/v2/json/S25GTD6M/book/${isbn}`)
      .map(res => res.json())

  }

  getPrice(isbn) {
    
    return this.http.get(`http://isbndb.com/api/v2/json/S25GTD6M/prices/${isbn}`)
      .map(res => res.json())
  }
}
