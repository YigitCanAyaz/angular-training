import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eexample',
  standalone: true
})
export class EexamplePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
