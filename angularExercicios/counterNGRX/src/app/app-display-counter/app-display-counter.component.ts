import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-display-counter',
  templateUrl: './app-display-counter.component.html',
  styleUrls: ['./app-display-counter.component.scss']
})
export class AppDisplayCounterComponent  {

  @Input()
  counter = 0;

}
