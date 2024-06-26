import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `
    Product <br>
    <!-- <a [routerLink]="['detail', 2]">Products Detail</a> <br> -->
    <router-outlet></router-outlet>
    
    <br>
      <ul>
        @for (photo of photos; track photo) {
          <li>
            <a [routerLink]="[photo.id]">{{photo.url}}</a>
          </li>
        }
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

  constructor(private activatedRoute : ActivatedRoute, private router: Router) {
    console.log(router.getCurrentNavigation()?.extras.state);
  }
  photos;
  ngOnInit(): void {

    // router event
    // this.router.events.subscribe((event: RouterEvent) => {
    //   if (event instanceof NavigationStart) {
    //     console.log("NavigationStart", event);
    //   }
    // });
    console.log(this.activatedRoute.data.subscribe(data => {
      console.log(data);
    }))
    this.activatedRoute.data.subscribe((data: any) => this.photos = data["photos"]);
  }
}
