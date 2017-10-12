import { SearchBarService } from './../search-bar.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private searchService: SearchBarService,
    private router: Router) { }

  ngOnInit() {
  }

  getMovieDetail(id){
    const link = ['/details', id];
    this.router.navigate(link);
    console.log("moving to getMovieDetail")
  }



}
