import { NgxEnumPresentationPipe } from './ngx-enum-presentation-pipe.pipe';

describe('enumPresentation', () => {
  it('create an instance', () => {
    const pipe = new NgxEnumPresentationPipe();
    expect(pipe).toBeTruthy();
  });

  const testUppercaseWord = ( input: string, uppercaseWord: string[], output: string ) => {
    const pipe = new NgxEnumPresentationPipe();
    expect( pipe.transform( input, uppercaseWord ) )
      .toEqual( output );
  }

  const testNoUppercaseWord = ( input: string, output: string ) => {
    const pipe = new NgxEnumPresentationPipe();
    expect( pipe.transform( input ) )
      .toEqual( output );
  }

  it('Empty input, no explicit excludedWord -> empty string output', () => {
    testNoUppercaseWord( '', '')
  });

  it('WORD input, no explicit excludedWord -> Word output', () => {
    testNoUppercaseWord( 'WORD', 'Word')
  });

  it('Empty input -> empty string output', () => {
    testNoUppercaseWord('', '');
  });

  it('2 underscore input -> 2 spaces output', () => {
    testNoUppercaseWord('__', '  ');
  });

  it('Single Word (ALL CAPS) input -> Single word (First Letter Capitalised)', () => {
    testNoUppercaseWord('WORD', 'Word');
  });

  it('Single Word (no caps) input -> Single word (First Letter Capitalised)', () => {
    testNoUppercaseWord('word', 'Word');
  });

  it('Multiple Words (CAPS and Underscore) -> Multiple words ( _ -> space, All words first letter Capitalised )', () => {
    testNoUppercaseWord('TEST_WORD', 'Test Word');
  });

  it('Multiple Words (CAPS and space) -> Multiple words ( First word First letter Capitalised )', () => {
    testNoUppercaseWord('TEST WORD', 'Test word');
  });

  it('Special Words should be all CAPS', () => {
    testUppercaseWord('TEST_WORD', ['word'], 'Test WORD');
  });

  it('word containing section of special word not presented in all caps', () => {
    testUppercaseWord('TEST_WORDS', ['word'], 'Test Words');
  });

});
