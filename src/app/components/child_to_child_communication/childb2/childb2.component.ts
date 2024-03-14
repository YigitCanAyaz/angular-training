import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childb2',
  template: `
  <p>{{data}}<p>`
})
export class Childb2Component {
  @Input() data: string;
}
