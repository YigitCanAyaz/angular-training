import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childa2',
  template: `
  <p>Childa2 Component<p>`
})
export class Childa2Component implements OnInit {
  
  @Output() data: EventEmitter<any> = new EventEmitter();
  
  ngOnInit(): void {
    this.data.emit("Child A 2'den gelen veri...");
  }

}
