import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { News } from './news';

@Injectable()
export class NewsService {

  private api_key = 'b0f6d1eb0f034870ae2fcc2236d74355';
  constructor(private _http: Http) {
    console.log(' News Service working ');
  }
  getHacker(): Observable<News[]> {
    return this._http.get('https://newsapi.org/v2/top-headlines?sources=hacker-news&' + 'apiKey=' + this.api_key)
      .map(res => res.json().articles)
      .catch(this._errorHandler);
  }
  getFuture(): Observable<News[]> {
    return this._http.get('https://newsapi.org/v2/everything?sources=next-big-future&apiKey=' + this.api_key)
      .map(res => res.json().articles)
      .catch(this._errorHandler);
  }
  getArticles(searchText: string): Observable<News[]> {
    return this._http.get('https://newsapi.org/v2/everything?q=' + searchText + '&apiKey=' + this.api_key)
      .map(res => res.json().articles)
      .catch(this._errorHandler);
  }
  _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }
}
