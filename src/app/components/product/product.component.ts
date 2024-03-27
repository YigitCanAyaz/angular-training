import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    Product <br>
    <a [routerLink]="['detail', 2]">Products Detail</a> <br>
    <router-outlet></router-outlet>
  `
})
export class ProductComponent {

}
