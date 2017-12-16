import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Book } from '../Models/book';


@Injectable()
export class BookService {

  constructor(private http: Http) { }

  getAll(): Observable<Book[]> {
    return this.http.get('http://localhost:55670/api/book')
      .map(this.extractData)
      .catch(this.handleError);
  }

  public extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public handleError(error: any | any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
