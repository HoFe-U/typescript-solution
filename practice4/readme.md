# 타입 정의
> (mapped 타입 / 인덱스드 엑세스 타입 / 템플릿 리터럴 타입) 에대하여 정리하는 내용

## 인덱스드 엑세스 타입
> 인덱스드 엑세스 타입은 인덱스를 이용해 다른 타입내의 특정 프로퍼티의 타입을 추출하는 타입

**기본문법**

```typescript
type T = SomeType[Key];

```
SomeType: 객체, 배열, 튜플 등의 타입
Key: 속성 이름 ("name"), 키 타입 (number, keyof, typeof, ...) 등 을 넣을수있습니다.

## KeyOf 연산자
> keyof 연산자는 객체 타입으로부터 나온 모든 KEY 를 String Literal Union 타입을 추출하는 연산자

**기본문법**

``` typescript

type OBJ = {
  name : string,
  age : number
}

type T = keyof OBJ;
// type T = name | age 가 된다

```

## Mapped 타입
> 기존의 type 형태를 순회하며 새로운 타입을 생성하는 기능으로
우리가 생각하는 map 과 유사한 형식으로 사용됩니다.

**기본문법**

```typescript
{ [P in K] : T}
{ [P in K] ?: T}
{ readonly [P in K] : T}
{ readonly [P in K] ?: T}
 ```
 정도가 있습니다.

## 조건부 타입
> 제네릭 타입에 따라 타입을 결정하는 기능
보통 extends 와 삼항 연산자를 이용해 조건에 따라 각각 다른 타입을 정의합니다.

**기본문법**

```typescript

type A = number extends string ? number : string;
// A 는 string 타입이된다. 이런식으로 사용...

```

## infer 
> 조건부 타입에서 특정 타입을 추론하기위한 문법
infer 키워드는 extends 절에서만 사용 가능합니다.
infer를 사용하여 추론된 타입은 조건부 타입의 참인 경우에만 사용될 수 있습니다.


**기본문법**

```typescript

type ArrayElementType<T> = T extends (infer U)[] ? U : T;

type NumberArray = number[]; // number[] extends (infer U)[] ? U : number[] => U 에해당하는건 number
type StringArray = string[]; // string[] extends (infer U)[] ? U : string[] => U 에해당하는건 string;
type NotArray = string;      // string extends (infer U)[] ? U : string => T 가반환

type ElementType1 = ArrayElementType<NumberArray>; // number
type ElementType2 = ArrayElementType<StringArray>; // string
type ElementType3 = ArrayElementType<NotArray>; // string

```
