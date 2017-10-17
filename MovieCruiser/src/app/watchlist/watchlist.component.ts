import { Router,RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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
              private router: Router, 
              public dialog: MatDialog) {}

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

  openDialog(): void {
    let dialogRef = this.dialog.open(MyDialog, {
      width: '500px',
      data: { id: this.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


}

@Component({
  selector: 'my-dialog',
  template:`<h2> New Comment {{data.id}}</h2>
              <mat-form-field class="example-full-width">
                <textarea #newComment matInput placeholder="New Comment"></textarea>
              </mat-form-field>
              <button mat-raised-button [mat-dialog-close]="data.comment" color = "primary"> Save </button>
            `
})

export class MyDialog{


  constructor(
    public dialogRef: MatDialogRef<MyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }


}
