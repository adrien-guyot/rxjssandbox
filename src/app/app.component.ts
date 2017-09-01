import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

import 'rxjs/add/observable/fromevent';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/merge';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <button id="like">J'aime</button>
  <button id="dislike">J'aime pas</button>
  <br>
  <div>nombre de likes: 
    <div *ngIf="show == true">{{counter}}</div>
  </div>`,
})
export class AppComponent implements OnInit {
  name = 'Angular';
  counter: number = 0;
  show: boolean = true;
  constructor() { }

  ngOnInit() {
    let like = document.getElementById('like');
    let dislike = document.getElementById('dislike');

    let like$ = Observable.fromEvent(like, 'click').mapTo(parseFloat("1"));
    let dislike$ = Observable.fromEvent(dislike, 'click').mapTo(parseFloat("-1"));

    let opinion$ = like$.merge(dislike$);

    let resultsCounter = opinion$.subscribe(
      (val: any) => {
        if (this.counter === 0 && val === -1) {
          this.counter = 0;
        } else {
          this.counter += val;
        }
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }
}

