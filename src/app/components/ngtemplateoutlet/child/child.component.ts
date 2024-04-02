import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-childdd',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet],
  template: `
  
    <ng-container *ngTemplateOutlet="childContainer">
      Ng Container içeriği...
    </ng-container>
   `
})
export class ChildComponent {
  @Input() childContainer : TemplateRef<HTMLElement>;
}
