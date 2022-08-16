import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencey',
})
export class CurrenceyPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value + ' EGP';
  }
}
