import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EexampleDirective } from 'src/app/directives/eexample.directive';
import { EexamplePipe } from 'src/app/pipes/eexample.pipe';

@Component({
  selector: 'app-cchild1',
  standalone: true,
  imports: [CommonModule, EexampleDirective, EexamplePipe],
  template: `Cchild 1 component`
})
export class Cchild1Component {

}
