import type { Equal, Expect } from '@type-challenges/utils'

type CamelCase<T extends string> = T extends `${infer P1}_${infer P2}${infer P3}`
? P2 extends "_" | "$"
  ? P2 extends "_" 
    ? P3 extends "" 
      ? `${Lowercase<P1>}${P2}${P2}`
      : `${Lowercase<P1>}${P2}${Capitalize<P3>}` 
    : T
  : `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
: Lowercase<T>

/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<CamelCase<'foobar'>, 'foobar'>>,
  Expect<Equal<CamelCase<'FOOBAR'>, 'foobar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo__bar'>, 'foo_Bar'>>,
  Expect<Equal<CamelCase<'foo_$bar'>, 'foo_$bar'>>,
  Expect<Equal<CamelCase<'foo_bar_'>, 'fooBar_'>>,
  Expect<Equal<CamelCase<'foo_bar__'>, 'fooBar__'>>,
  Expect<Equal<CamelCase<'foo_bar_$'>, 'fooBar_$'>>,
  Expect<Equal<CamelCase<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
  Expect<Equal<CamelCase<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>,
]