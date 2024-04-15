import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `Child1 Component`,
  providers: [
    {provide: "ex", useValue: "merhaba"}
  ]
})
export class Child1Component {
  x(){
    console.log("Child1 Component X");
  }
}
