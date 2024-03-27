import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a1',
  template: ``
})
export class A1Component implements OnInit{
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe({
      next : queryStringParam => console.log(queryStringParam.get("x"))
    });
  }
}
