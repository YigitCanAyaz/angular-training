import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <p>parent works!</p>
  <app-child [childData]="data"></app-child>
  `
})
export class ParentComponent {
  data: string = "Merhaba";
}
