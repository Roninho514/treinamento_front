import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, decrementCounter, incrementCouter, inputCount } from './store/app.state';
import {map} from 'rxjs/operators';
import {HttpClient} from  '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counterNGRX';

  todos : ITodo[] = []

  constructor(private store : Store<{app : IAppState}>,
    private http: HttpClient){}


    ngOnInit(): void {
      this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').subscribe({
        next: (res) => this.todos = res
      })
    }

  /* counter$  = this.store.select('app') . pipe(map(e => e.counter));

  incrementCounter(){
    this.store.dispatch(incrementCouter());
  }

  decrementCounter(){
    this.store.dispatch(decrementCounter())
  }

  inputCount(definecount : string){
    const valueFormated = parseFloat(definecount);
    this.store.dispatch(inputCount({setCount: valueFormated}));
  } */

}

export interface ITodo{
  userId: number;
  id:     number;
  title:  string;
  completed: boolean;
}


