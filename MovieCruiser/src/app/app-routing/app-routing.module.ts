import { MovieDetailComponent } from './../movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './../search-results/search-results.component';
import { HomeComponent} from './../home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { WatchlistComponent } from '../watchlist/watchlist.component';


const routes: Routes =  [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'results', component: SearchResultsComponent },
    {path: 'home', component: HomeComponent},
    {path: 'watchlist', component: WatchlistComponent},
    {path: 'details/:id', component: MovieDetailComponent}

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}
