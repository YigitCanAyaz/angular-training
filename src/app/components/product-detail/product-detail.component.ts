import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  template: `ProductDetail <br> 
  <a routerLink="spec">Spec</a> & <a routerLink="overview">Overview</a> <br>
  <router-outlet></router-outlet>
  `
})
export class ProductDetailComponent {

}
