import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumPresentation'
})
export class NgxEnumPresentationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
