import { Component } from '@angular/core';

@Component({
  selector: 'app-parent3',
  template: `

  <div style="background-color:chocolate;">
  <p>Parent2 Component<p>
  <app-childa2 (data)="childData($event)"></app-childa2>
  <br/>
  <app-childb2 [data]="childa2Message"></app-childb2>
</div>
  `
})
export class Parent3Component {
  childa2Message: string;
  childData(message: string){
    this.childa2Message = message;
  }
}
