import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadComponentService {
  async loadComponent(viewContainerRef: ViewContainerRef, componentType: any) {
    // return viewContainerRef
    // .createComponent((await import("../components/example/example.component"))
    // .ExampleComponent);
    viewContainerRef.clear();
    return viewContainerRef.createComponent(componentType);
  }
}
