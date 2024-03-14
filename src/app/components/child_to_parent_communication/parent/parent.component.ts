import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-2',
  template: `
  <p>Parent Component</p>
  <app-child-2 (dataEvent)="childEvent($event)"></app-child-2>
  `
})
export class ParentComponent {
  childEvent(obj: any){
    console.log(obj);
  }
}
