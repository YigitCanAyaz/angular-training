import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `Home`

})
export class HomeComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    // var d = activatedRoute.snapshot.paramMap.has("id");
    // console.log("id", d);
    // var d2 = activatedRoute.snapshot.paramMap.has("ahmet");
    // console.log("ahmet", d2);
    // var d3 = activatedRoute.snapshot.paramMap.get("ahmet");
    // console.log("ahmet", d3);

    activatedRoute.paramMap.subscribe({
      next: parameter => {
        console.log(parameter.get("ahmet"))
      }
    })

  }
}
