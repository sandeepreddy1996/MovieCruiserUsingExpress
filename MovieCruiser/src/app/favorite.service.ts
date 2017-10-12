import { Http, HttpModule, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FavoriteService {

  url = 'http://localhost:3000/watchlist';

  constructor(private http: Http) { }

  toWatchList(object){
    object['userComments'] = 'Saved with no comments';
    const obj = object ;
    this.http.post(this.url, obj).subscribe(res => {});
    // console.log("written to favorites");
    // console.log(obj);
  }
}
