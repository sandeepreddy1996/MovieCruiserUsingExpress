import { FavoriteService } from './favorite.service';
import { SearchBarService } from './search-bar.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    HomeComponent,
    WatchlistComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SearchBarService, FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
