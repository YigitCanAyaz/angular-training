import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `<ng-content></ng-content>`,
  providers: [
    {provide: "ex", useValue: "merhaba"}
  ]
})
export class Child1Component {
  @ContentChild("i") input : ElementRef;

  x(){
    console.log("Child1 Component X");
  }

  ngAfterContentInit(){
    console.log(this.input);
    
  }
}
