/**
 * Todo 1 : 암묵적 anyType 설정
 */

function func (a,b) { 
  return;
}

/**
 * 아래 빈칸들을 채워보세요
 * Todo 2
 */

// 1. 함수 타입 정의
type Operation = (a: number, b: number) => number;

// 2. 함수 시그니처(call signature) 형태 정의
type Operation2 = {
  (a: number, b: number): number;
};

// 3. 오버로딩 함수 선언
function display(value: string): void;
function display(value: number): void;

// 실제 구현부
function display(value: any): void {
  console.log("VALUE: ", value); // 여기까지는 anyType
  // TODO 3: 각기다른 함수가 실행되게 처리
  if (typeof value === "string") {
    value.toLowerCase();
  } else if (typeof value === "number") {
    value.toFixed();  
  }
}

// 4. 타입 단언
let unknownValue: unknown;
let message: string;

unknownValue = "hello";
message = unknownValue as string;
