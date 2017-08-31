import { Component } from '@angular/core';
// import { MyCustomObserver } from './mycustomobserver';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><button (click)="createObservable()">Créer un observable</button>`,
})
export class AppComponent {
  name = 'Angular';

  createObservable() {
    let interval$ = Observable.interval(1000).take(5);

    let sub = interval$.subscribe(
      (val: any) => console.log('et', val),
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }
}
