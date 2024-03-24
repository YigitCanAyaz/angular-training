import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { RandomService } from 'src/app/random.service';

@Component({
  selector: 'app-b',
  template: `
    BComponent => {{randomService?.random}}
  `,
  providers: [
    
  ]
})
export class BComponent {
  constructor(@Optional() @Self() public randomService: RandomService) {
  }
}
