import { Component } from '@angular/core';
// import { MyCustomObserver } from './mycustomobserver';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mapto';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><button (click)="createObservable()">Créer un observable</button>`,
})
export class AppComponent {
  name = 'Angular';

  createObservable() {
    let numbers = [3, 4, 5];
    // let numbers$ = Observable.create((observer: any) => {
    //   for (let n of numbers) {
    //     observer.next(n);
    //   }
    //   observer.complete();
    // });
    // numbers$.subscribe(
    //   (val: any) => console.log(val),
    //   (err: any) => console.log(err),
    //   () => console.log('Complete !')
    // )
    let numbers$ = Observable.from(numbers);
    let myOtherNumbers$ = numbers$.mapTo ( "blah" );

    let sub = numbers$.subscribe(
      (val: any) => console.log(val),
      (err: any) => console.log(err),
      () => console.log('complete')
    );

    let sub2 = myOtherNumbers$.subscribe(
      (val: any) => console.log(val),
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }
}
