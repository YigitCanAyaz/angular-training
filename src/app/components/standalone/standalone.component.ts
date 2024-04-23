import { Component, Inject } from '@angular/core';
import { Standalone2Component } from '../standalone2/standalone2.component';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  standalone: true,
  imports: [Standalone2Component, FormsModule, RouterModule]
})
export class StandaloneComponent {
  
  constructor(@Inject("url") private url : string) {
    console.log(url);
  }
  data: any;
}
