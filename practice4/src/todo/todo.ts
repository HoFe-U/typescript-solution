/**
 * TODO 1. Required<T> 타입만들기
 * -> 모든 프로퍼티를 필수값으로 처리
 *
 * hint : 옵서널을걸땐 ?: / 옵셔널을 제거하겠따 -?:
 */

import { Equal, Expect } from "../utils/utils";

interface Post {
  readonly title: string;
  tags: string[];
  content: string;
  thumnailURL?: string;
}

type Required<T> = {
  [key in keyof T]-?: T[key];
};

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

type ReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};

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

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

type pickCases = [
  Expect<Equal<Pick<Post, 'title'>, { readonly title: string }>>,
  Expect<Equal<Pick<Post, 'title' | 'content'>, { readonly title: string; content: string }>>,
  Expect<Equal<Pick<Post, 'tags'>, { tags: string[] }>>
];
/**
 * TODO 4.Exclude<T,U>
 * -> 객체 타입에서 U 에 해당하느 타입을 제외
 * -> 아래 testCase 를 다 통과해야합니다.
 */

type Exclude<T, U> = T extends U ? never : T;

type excludeCases = [
  Expect<Equal<Exclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<Exclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<Equal<Exclude<string | number | (() => void), Function>, string | number>>
];
/**
 * TODO 5.Include<T,U>
 * -> 객체 타입에서 U 에해당하는 타입만 삽임
 * -> 아래 testCase 를 다 통과해야합니다.
 */
type Include<T extends any[], U> =
  T extends [infer First, ...infer Rest]  // 배열 T 가 First, ... infer Rest 형태로 처리될수있는지 확인
    ? Equal<First, U> extends true        // T에 요소가 하나라도 있을경우 새로운 조건으로 들어오고 First 가 우리가 찾고있는 U와 타입이 일치하는지 비교
      ? true                              // First 와 U 가 같다면 true 를 반환
      : Include<Rest, U>                  // 다르다면 재귀호출
    : false;                              // T 가더이상 분해가안되면 false

// T = [A, B, C], U = B 이와같은 값이 들어왔을경우
// → First = A, Rest = [B, C]
//   → Equal<A, B> = false → Includes<[B, C], B>
//     → First = B → Equal<B, B> = true → ✅ true!

type includeCases = [
  Expect<Equal<Include<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">, true>>,
  Expect<Equal<Include<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">, false>>,
  Expect<Equal<Include<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Include<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Include<[1, 2, 3], 2>, true>>,
  Expect<Equal<Include<[1, 2, 3], 1>, true>>,
  Expect<Equal<Include<[{}], { a: "A" }>, false>>,
  Expect<Equal<Include<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Include<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Include<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Include<[{ a: "A" }], { readonly a: "A" }>, false>>,
  Expect<Equal<Include<[{ readonly a: "A" }], { a: "A" }>, false>>,
  Expect<Equal<Include<[1], 1 | 2>, false>>,
  Expect<Equal<Include<[1 | 2], 1>, false>>,
  Expect<Equal<Include<[null], undefined>, false>>,
  Expect<Equal<Include<[undefined], null>, false>>
];

/**
 * TODO 6.ReturnType<T>
 * -> 함수의 반환유형 가져오기
 * -> 아래 testCase 를 다 통과하게 만들어야합니다.
 * hint:  extends 를 활용하고 args 가 여러개 들어갈수 있다는걸 생각해야합니다.
 */

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type a = ReturnType<typeof fn>; // 결과가 "1 | 2"

type returnTypeCases = [
  Expect<Equal<string, ReturnType<() => string>>>,
  Expect<Equal<123, ReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, ReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, ReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => "foo", ReturnType<() => () => "foo">>>,
  Expect<Equal<1 | 2, ReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, ReturnType<typeof fn1>>>
];

type ComplexObject = {
  a: [12, "foo"];
  bar: "hello";
  prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);
