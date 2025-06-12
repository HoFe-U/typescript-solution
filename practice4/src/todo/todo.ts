/**
 * TODO 1. Required<T> 타입만들기
 * -> 모든 프로퍼티를 필수값으로 처리
 * 
 * hint : 옵서널을걸땐 ?: / 옵셔널을 제거하겠따 -?: 
 */

import { Equal, Expect } from "../utils/utils";

interface Post {
  readonly title : string;
  tags : string[];
  content : string;
  thumnailURL ?: string;
}

type Required<T> = any;

type requiredCases = [
  Expect<Equal<Required<{ a?: string }>, { a: string }>>,
  Expect<Equal<Required<{ a: number, b?: string }>, { a: number, b: string }>>,
  Expect<Equal<Required<Post>, {
    readonly title: string;
    tags: string[];
    content: string;
    thumnailURL: string;
  }>>,
];
/**
 * TODO 2. ReadOnly<T>
 * -> 읽기 전용 수정불가
 */

type ReadOnly<T> = any;

type readOnlyCases = [
  Expect<Equal<ReadOnly<{ a: string }>, { readonly a: string }>>,
  Expect<Equal<ReadOnly<Post>, {
    readonly title: string;
    readonly tags: string[];
    readonly content: string;
    readonly thumnailURL?: string;
  }>>
];
/**
 * TODO 3. Pick<T, K>
 * -> 특정 객체 타입으로 부터 특정 프로퍼티만 뽑기
 */

type Pick<T, K> = any;

type pickCases = [
  Expect<Equal<Pick<Post, 'title'>, { title: string }>>,
  Expect<Equal<Pick<Post, 'title' | 'content'>, { title: string; content: string }>>,
  Expect<Equal<Pick<Post, 'tags'>, { tags: string[] }>>
];
/**
 * TODO 4.Exclude<T,U>
 * -> 객체 타입에서 U 에 해당하느 타입을 제외
 * -> 아래 testCase 를 다 통과해야합니다.
 */

type Exclude<T ,U> = any;

type excludeCases = [
  Expect<Equal<Exclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<Exclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<Exclude<string | number | (() => void), Function>, string | number>>,
]
/**
 * TODO 5.Include<T,U>
 * -> 객체 타입에서 U 에해당하는 타입만 삽임
 * -> 아래 testCase 를 다 통과해야합니다.
 */
type Include<T, U> = any;

type includeCases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>,
]

/**
 * TODO 6.ReturnType<T>
 * -> 함수의 반환유형 가져오기 
 * -> 아래 testCase 를 다 통과하게 만들어야합니다.
 * hint:  extends 를 활용하고 args 가 여러개 들어갈수 있다는걸 생각해야합니다.
 */

type ReturnType<T> = any;

type a = ReturnType<typeof fn> // 결과가 "1 | 2"

type returnTypeCases = [
  Expect<Equal<string, ReturnType<() => string>>>,
  Expect<Equal<123, ReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, ReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, ReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', ReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, ReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, ReturnType<typeof fn1>>>,
]

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2
