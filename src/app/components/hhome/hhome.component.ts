import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cchild1Component } from '../cchild1/cchild1.component';

@Component({
  selector: 'app-hhome',
  standalone: true,
  imports: [CommonModule, Cchild1Component],
  template: `Home component <br>
  <app-cchild1></app-cchild1>`
})
export class HhomeComponent {

}
