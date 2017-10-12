import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class SearchBarService {

  result: any[] = [];

  baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=337f8fcb0c57f0a1b060f0362cfa1a8b&query=';

  baseUrl2 = 'https://api.themoviedb.org/3/movie/';

  apiKey = '?api_key=337f8fcb0c57f0a1b060f0362cfa1a8b';

  private nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=cf8441d05e8376c04c2feb36bd5b492f&language=en-US&page=1';

  constructor(private http: Http) { }

  getMovies(name: string){
    const url = `${this.baseUrl}${name}`;
    console.log(url);
    return this.http.get(url)
                    .map(result => result.json());
  }

  getMovieDetailById(id: number){
    const url = `${this.baseUrl2}${id}${this.apiKey}`;
    console.log(url);
    return this.http.get(url)
                    .map(result => result.json());
  }

  getRecommendedMovies(id: number) {
    const url = this.baseUrl2 + id + '/recommendations' + this.apiKey;
    console.log('Recommended Url', url);
    return this.http.get(url).map(result => result.json());
  }

  getCast(id: number) {
    const url = this.baseUrl2 + id + '/credits' + this.apiKey;
    console.log('Credits Url', url);
    return this.http.get(url).map(result => result.json());
  }

  getNowPlayingMovies() {
    return this.http.get(this.nowPlayingUrl).map(response => response.json());
  }

}
