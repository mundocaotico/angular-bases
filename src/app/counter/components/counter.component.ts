import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent{
  constructor() {}

  public counter: number = 10;

  incrementCounter(): void {
    this.counter++;
  }

  decrementCounter(): void {
    this.counter--;
  }

  resetCounter() : void {
    this.counter = 10;
  }

}
