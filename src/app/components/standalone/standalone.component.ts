import { Component } from '@angular/core';
import { Standalone2Component } from '../standalone2/standalone2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  standalone: true,
  imports: [Standalone2Component, FormsModule]
})
export class StandaloneComponent {
  data: any;
}
