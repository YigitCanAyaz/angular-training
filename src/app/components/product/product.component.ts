import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `
    Product <br>
    <!-- <a [routerLink]="['detail', 2]">Products Detail</a> <br> -->
    <router-outlet></router-outlet>

    <br>
    <ul>
      <li *ngFor="let photo of photos">
      <a [routerLink]="[photo.id]">{{photo.url}}</a>
      </li>
    </ul>
  `
})
export class ProductComponent implements OnInit{
  // constructor(private httpClient : HttpClient){}
  // photos;
  // ngOnInit(): void {
  //   this.httpClient.get("https://jsonplaceholder.typicode.com/photos")
  //   .subscribe(photos => this.photos = photos)
  // }

  // Functional Router Guard

  constructor(private activatedRoute : ActivatedRoute) {}
  photos;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => this.photos = data["photos"]);
  }
}
