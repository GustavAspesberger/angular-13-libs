# NgxEnumPresentationPipe

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Install

### Usage - npx-enum-presentation-pipe
```typescript
enum TestEnum {
  WORD = "WORD",
  WORD_TEST = "WORD_TEST"
}

let testEnum: TestEnum = TestEnum.WORD
let testEnum2: TestEnum = TestEnum.WORD_TEST

let uppercaseWord = ['test']
```

```angular2html
<div> {{ testEnum | enumPresentation }} </div> <!-- Output: Word -->
<div> {{ testEnum2 | enumPresentation }} </div> <!-- Output: Word Test -->
<div> {{ testEnum2 | enumPresentation:uppercaseWord }} </div> <!-- Output: Word TEST --> 
```
