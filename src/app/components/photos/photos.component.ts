import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  template: `
  <ng-container *ngFor="let photo of photoLinks;">
    <img *ngIf="photo !=null" width="256" height="256" [lazyLoad]="photo">
  </ng-container>
  `,
})
export class PhotosComponent {
  photoLinks: any;
  constructor() {
    this.photoLinks = Array(198).fill(0, 1, 199).map((x, i) => i < 100 ? `https:
    //randomuser.me/api/potraits/men/${i}.jpg` : `https://randomuser.me/api/potraits
    /women/${(i - 99)}.jpg`);
  }
}
