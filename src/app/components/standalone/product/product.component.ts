import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: `Product Component`

})
export class ProductComponent implements OnInit{

  // constructor(private activatedRoute: ActivatedRoute){
  //   activatedRoute.paramMap.subscribe(params => console.log(params.get("id")));
  //   activatedRoute.data.subscribe(datas => console.log(datas["productName"]));
  //   activatedRoute.data.subscribe(datas => console.log(datas["products"]));
  // }

  @Input() id : string;
  @Input() productName: string;
  @Input() products: [];

  ngOnInit(): void {
    console.log(this.id);
    console.log(this.productName);
    console.log(this.products);
  }
}
