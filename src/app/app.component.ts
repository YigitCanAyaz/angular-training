import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // template: `<p>merhaba</p>
  // <hr>
  // <div style="background-color: aqua;">
  // <app-home></app-home></div>
  // `,
  template:`
  // property binding
  <!-- <input type="text" [value]="title"/>
  <app-home [pageName]="title"></app-home> -->

  // Two Way Data Binding
  <!-- <input type="text" [(ngModel)]="name" (ngModelChange)="onChange($event)"/><br/>
  <input type="text" [(ngModel)]="name"/><br/>
  {{name}} -->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj2';
  name: string;

  onChange($event) {
    console.log("input değişti!!!");
  }
}
