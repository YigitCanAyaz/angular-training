import { Component, Self } from '@angular/core';
import { RandomService } from 'src/app/random.service';

@Component({
  selector: 'app-a',
  template: `
    AComponent => {{randomService.random}}
    <br>
    <app-b></app-b>
  `,
  styleUrls: ['./a.component.scss'],
  providers: [RandomService]
})
export class AComponent {
  constructor(@Self() public randomService: RandomService) {
  }
}
