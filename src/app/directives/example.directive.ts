import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

declare var $: any; // jquery tanımalaması

@Directive({
  selector: '[appExample]' // directive'i kullanmamızı sağlayan referanstır
})
export class ExampleDirective implements OnInit {

  constructor(private element: ElementRef) {
    console.log("Example directive!");
  }
  ngOnInit(): void {
    $(this.element.nativeElement).fadeOut(2000).fadeIn();
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @Input() color: string;

  @HostListener("click") // click eventine karşılık dekoratör
  onClick() {
    alert("HTML Nesnesi Click Edildi...");
  }

  @HostBinding("style.color") // özelliğe bind ederiz
  writingColor: string = "red";

}
