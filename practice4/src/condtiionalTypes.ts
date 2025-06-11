/**
 * 1.제네릭 조건부타입
 */

type StringNumberChange<T> = T extends number ? string : number;

let value1 : StringNumberChange<number> = "a"; // T number => 값은 string

let value2 : StringNumberChange<string> = 1; // T string => 값은 number

/**
 * 공백을지우는 함수를 만드려고하면?
 * 아래의 2가지 방법으로 만들수가 있습니다
 * 
 */

function removeSpace<T>(text :T): T extends string ? string : undefined {
  if (typeof text === "string") {
    return text.replaceAll(" ","") as any;
  }
  return undefined as any;
}
const a = removeSpace("hello");
const b = removeSpace(123);

function removeSpaces2<T>(text : T) : T extends string ? string : undefined

function removeSpaces2(text : any) {
  if (typeof text === "string") {
    text.trim()
    return text.replaceAll(" ","");
  }
  return undefined;
}

const r1 = removeSpaces2("hello world"); // string
const r2 = removeSpaces2(123);

/**
 * 2.분산적인 조건부 타입
 */

type StringNumberChange2<T> = T extends number ? string :number;

let snc1 : StringNumberChange2<number>;

let snc2 : StringNumberChange2<string>;

/**
 * 조건부 타입에 union type 을 할당하게 되면 분산조건부 타입으로 동작한다.
 * 동작방식 : 한번은 number  한번은 string으로 
 * 상단의 snc1 과 snc2 처럼 하나씩 동작
 */
let snc3 : StringNumberChange2<number | string | boolean>;
/**
 * 동작방식 
 * 
 * 1단계
 * 
 * StringNumberChange2<number>
 * StringNumberChange2<string>
 * StringNumberChange2<boolean>
 * 
 * 
 * 2단계
 * 
 * number
 * string
 * number
 * 
 * 3단계
 * 
 * number string
 */

/**
 * 특정항목에서 하나를 제외하고싶으면 Exclude 같은
 */
type Exclude<T,U> = T extends U ? never : T;

type ExcludeA = Exclude<number | string | boolean , string>
/**
 * 1 단계
 * Exclude<number, string>
 * Exclude<string, string>
 * Exclude<boolean, string>
 * 
 * 2 단계
 * number
 * never
 * boolean
 * 
 * 결과
 * number | never | boolean (never 는 공집합)
 * 
 * ExcludeA =  number | boolean
 */

type Extract<T,U> = T extends U ? T : never;
/**
 * 단계별 작성
 */

/**
 * 3.infer 
 * 
 * inference => 추론하다
 */

type FuncA = () => string;

type FuncB = () => number;

/**
 * 상단의 type 들을 공통으로 묶을수 있는방법은 없을까?
 */

type ReturnTypeString<T> = T extends () => string ? string : never; //FuncA

type ReturnTypeNumber<T> = T extends () => number ? number : never; //FuncB


/**
 * infer R 은 이 조건식이 참이되는 최적의 R 을 추론하라는 의미
 */
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;
/**
 * 단계별 이해
 * 
 * FunA 가 ReturnType에들어왔을경우
 * 
 * 1. T 는 () => string 이됨
 * 2. ReturnType 에 대입하면 () => string extends () => infer R ? R : never;
 * 3. 해당조건식을 참으로 만드는 R 타입을 추론하면 R => string 이됩니다.
 */