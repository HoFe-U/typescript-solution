/**
 * 함수의 타입을 정의하는 방법
 */

/**
 * 1. js 처럼 정의하기
 */
function func (a,b) { // 설정파일 수정하면 가능(암묵적 anyType 사용을막음)
  return a + b;
}

/**
 * 2. 반환값 타입의 자동추론
 */
function addFunc (a : number,b : number) {
  return a + b;
}

/**
 * 3. 화살표 함수 타입 정의 (함수의 선언식과 동일)
 */
const add = (a : number, b: number) : number => a + b;

/**
 * 자동 추론
 */
const add2 = (a : number, b: number) => a + b;

/**
 * 위의 함수형태를 타입으로 선언할수 있다.
 */
type Add = (a : number , b : number) => number; // 왜 쓰냐? func 랑 다를게 없는데 => Operation 예시

let num1 = 1;
let num2 = 2;


type Operation = (a : number, b : number) => number;

const plus :Operation = (a : number, b: number) => a + b;
const minus :Operation = (a : number, b: number) => a - b;
const multiply :Operation = (a : number, b: number) => a * b;
const divided :Operation = (a : number, b: number) => a / b;

/**
 * 호출 시그니쳐 (Call Signature)
 * - js 에서는 함수도 객체이기 때문에 함수의 타입을 별도로 지정하는것을 말함]
 */

type Operation2 = {
  (a : number, b : number) : number;
}

const plus2 :Operation2 = (a : number, b: number) => a + b;
const minus2 :Operation2 = (a : number, b: number) => a - b;
const multiply2 :Operation2 = (a : number, b: number) => a * b;
const divided2 :Operation2 = (a : number, b: number) => a / b;

/**
 * 객체형태이기 때문에 
 * 추가적인 프로퍼티가 추가될경우 (하이브리드 타입) 이라 합니다.
 */
type Operation3 = {
  (a : number, b : number) : number;
  name : string;
}

const plus3 :Operation3 = (a : number, b: number) => a + b;
const minus3 :Operation3 = (a : number, b: number) => a - b;
const multiply3 :Operation3 = (a : number, b: number) => a * b;
const divided3 :Operation3 = (a : number, b: number) => a / b;

plus3.name = 'a';
/**
 * 오버로딩 
 * function 함수명 (매개변수 : 타입) : 반환되는타입
 */
function log(value : string) : void;
function log(value : number) : void;
function log(value : boolean) : void;

/**
 * 실제 구현부는 하나는 있어야한다.
 */
function log(value : any) : void {
  console.log("LOG : ", value);
}

/**
 * 타입단언 vs 타입 지정
 */

let unKonwnValue : unknown;
let stringValue : string;

unKonwnValue = "string" as string;

stringValue = unKonwnValue as string; // 타입의 단언 <-- 

/**
 * 왜 위에서는 unknown 그대로 인데 아래에서는 stringValue 로 인식이될까?
 * -> as 는 타입을 강제로 지정
 * -> 컴파일러에게 특정타입으로 단언 (강제로지정) 하기떄문에 가능
 */