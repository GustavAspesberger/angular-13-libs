import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxEnumPresentationPipe'
})
export class NgxEnumPresentationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
