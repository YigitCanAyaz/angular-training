import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
  Example <br>
  <input type="text" [(ngModel)]="data">
  <ng-content></ng-content>
  `
})
export class ExampleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  @Input() data: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("1. ngOnChanges");
  }

  ngOnInit(): void {
    console.log('2. ngOnInit');
  }

  ngDoCheck(): void {
    console.log("3. ngDoCheck");
  }

  ngAfterContentInit(): void {
   console.log('4. ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('5. ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('6. ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('7. ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('8. ngOnDestroy');
  }
  
}
