import { SearchBarService } from './../search-bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nowPlayingMovies: Array<Object> = [];

  constructor(private searchService: SearchBarService) { }

  ngOnInit() {
    this.searchService.getNowPlayingMovies().subscribe(response => {
      //console.log('nowPlayingResults');
      //console.log(response.results);
      this.nowPlayingMovies = response.results.splice(0, 6);
    });
  }

}
