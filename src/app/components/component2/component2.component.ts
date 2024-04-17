import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `<br/><p>Component 2 p </p>`,
  styles: ["p{color: blue}"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Component2Component {

}
