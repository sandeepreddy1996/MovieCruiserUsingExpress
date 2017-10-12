import { Component } from '@angular/core';
import { SearchBarService } from './search-bar.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private searchService: SearchBarService,
              private router: Router){}

  navigateTo(){
    const link = ['/results'];
    this.router.navigate(link);
  }

  search(movieName: string){
    this.searchService.getMovies(movieName)
      .subscribe(response => {
        this.searchService.result = response.results;
        this.navigateTo();
      });
  }
}
  