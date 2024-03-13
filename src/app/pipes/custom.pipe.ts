import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  // Pipe'ın kullanıldığı değeri manipüle/transform etmemizi sağlayan fonksiyondur.
  transform(value: string, a: number, b: number): string {
    return value.slice(a,b);;
  }

}
