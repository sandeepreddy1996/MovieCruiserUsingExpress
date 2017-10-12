import { FavoriteService } from './../favorite.service';
import { SearchBarService } from './../search-bar.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(
    private searchService: SearchBarService,
    private route: ActivatedRoute,
    private location: Location,
    private favoriteService: FavoriteService,
    private router: Router) { }

  movie: Object;
  cast: any[] = [];
  recommended: Array<Object> = [];
    
  ngOnInit() {

    this.route.paramMap
    .switchMap((params: ParamMap) => this.searchService.getMovieDetailById(+params.get('id')))
    .subscribe(response => {
      this.movie = response;
      console.log(response);
    });

    this.route.params.map(params => params['id'])
    .switchMap(id => this.searchService.getRecommendedMovies(id))
    .subscribe(response => this.recommended = response.results.splice(0, 6));

    this.route.params.map(params => params['id'])
    .switchMap(id => this.searchService.getCast(id))
    .subscribe(response => this.cast = response.cast.splice(0, 3));
  }

  addToWatchlist(movieObject){
    this.favoriteService.toWatchList(movieObject);
  }

  goToDetail(id){
    const link = ['/details', id];
    this.router.navigate(link);
  }

}
