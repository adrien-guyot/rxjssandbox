import { Component } from '@angular/core';
// import { MyCustomObserver } from './mycustomobserver';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromevent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><button (click)="createObservable()">Créer un observable</button>`,
})
export class AppComponent {
  name = 'Angular';

  createObservable() {
    let click$ = Observable.fromEvent(document, 'click');
    let coords$ = click$
      .map(evt => ({ x: evt.clientX, y: evt.clientY }));
    let lefty$ = coords$.filter(obj => obj.x<200);
    let sub = lefty$.subscribe(
      (val: any) => console.log(val),
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }
}
