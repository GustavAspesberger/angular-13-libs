import { NgxEnumPresentationPipe } from './ngx-enum-presentation-pipe.pipe';

describe('enumPresentation', () => {
  it('create an instance', () => {
    const pipe = new NgxEnumPresentationPipe();
    expect(pipe).toBeTruthy();
  });

  const testWithExcludedWord = ( input: string, excludedWordInput: string[] | undefined, output: string ) => {
    const pipe = new NgxEnumPresentationPipe();
    expect( pipe.transform( input, excludedWordInput ) )
      .toEqual( output );
  }

  const testWithoutExcludedWord = ( input: string, output: string ) => {
    const pipe = new NgxEnumPresentationPipe();
    expect( pipe.transform( input ) )
      .toEqual( output );
  }

  it('Empty input, no explicit excludedWord -> empty string output', () => {
    testWithoutExcludedWord( '', '')
  });

  it('WORD input, no explicit excludedWord -> Word output', () => {
    testWithoutExcludedWord( 'WORD', 'Word')
  });

  it('Empty input -> empty string output', () => {
    testWithExcludedWord('', undefined, '');
  });

  it('Empty input -> empty string output', () => {
    testWithExcludedWord('', undefined, '');
  });

  it('2 underscore input -> 2 spaces output', () => {
    testWithExcludedWord('__', undefined, '  ');
  });

  it('Single Word (ALL CAPS) input -> Single word (First Letter Capitalised)', () => {
    testWithExcludedWord('WORD', undefined, 'Word');
  });

  it('Single Word (no caps) input -> Single word (First Letter Capitalised)', () => {
    testWithExcludedWord('word', undefined, 'Word');
  });

  it('Multiple Words (CAPS and Underscore) -> Multiple words ( _ -> space, All words first letter Capitalised )', () => {
    testWithExcludedWord('TEST_WORD', undefined, 'Test Word');
  });

  it('Multiple Words (CAPS and space) -> Multiple words ( First word First letter Capitalised )', () => {
    testWithExcludedWord('TEST WORD', undefined, 'Test word');
  });

  it('Special Words should be all CAPS', () => {
    testWithExcludedWord('TEST_WORD', ['word'], 'Test WORD');
  });

  it('word containing section of special word not presented in all caps', () => {
    testWithExcludedWord('TEST_WORDS', ['word'], 'Test Words');
  });

});
