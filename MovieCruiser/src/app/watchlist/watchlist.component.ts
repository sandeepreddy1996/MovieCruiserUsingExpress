import { Router,RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  favorites = [];
  id;

  constructor(private http: Http,
              private router: Router) { }

  ngOnInit() {
    this.http.get(`http://localhost:3000/watchlist`).subscribe(res => {
      this.favorites = res.json();
      // console.log("json",res.json());
      //console.log("Favorites",res.json()['favorites']);
    });

  }

  removeFromFav(id){
    this.http.delete('http://localhost:3000/watchlist/' + String(id)).subscribe(res => {});
    //console.log('http://localhost:3000/watchlist/' + String(id));

    let deleted = this.favorites.find((element) => {
      return id == element['id'];
    });
    
    let index = this.favorites.indexOf(deleted);

    this.favorites.splice(index,1);

    console.log("modified favorites", this.favorites)
  }

  updateComments(newComment){

    console.log(this.id);

    const obj={"userComments": newComment};

    this.http.put('http://localhost:3000/watchlist/'+String(this.id),obj).subscribe(res => {});

    this.favorites.forEach((element) => {
      if(this.id == element.id){
        element["userComments"] = newComment;
      }
    });
  }

  getId(id){
    this.id = id;
  }




}
