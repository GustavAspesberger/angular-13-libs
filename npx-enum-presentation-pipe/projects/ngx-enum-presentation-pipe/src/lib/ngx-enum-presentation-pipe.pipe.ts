import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumPresentation'
})
export class NgxEnumPresentationPipe implements PipeTransform {

  transform(value: string, excludedWords: string[] | undefined = undefined ): string {
    return value.toLowerCase()
      .split('_')
      .map(wordSection => {
        if ( !!excludedWords && excludedWords.includes(wordSection) ) {
          return wordSection.toUpperCase();
        }
        return wordSection.replace(/^\w/, character => character.toUpperCase());
      })
      .join(' ');
  }

}
