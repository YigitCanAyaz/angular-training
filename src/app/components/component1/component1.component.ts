import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `<br/> <p [style.color]="color">Component 1 p </p> <br/>
  `,
})
export class Component1Component {
  color: string = "red";
}
