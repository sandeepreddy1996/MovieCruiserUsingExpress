import { FavoriteService } from './favorite.service';
import { SearchBarService } from './search-bar.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WatchlistComponent, MyDialog } from './watchlist/watchlist.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import {MatToolbarModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    HomeComponent,
    WatchlistComponent,
    MovieDetailComponent,
    MyDialog
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule
  ],
  entryComponents:[MyDialog],
  providers: [SearchBarService, FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
