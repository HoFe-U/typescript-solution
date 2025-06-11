/**
 * 제네릭 기본정의
 *
 * 데이터 형식의 의존하지 않고 다른 데이터 타입을 가질수 있게 하는 기술
 */
function func(value) {
    return value;
}
let num = func(10);
let str = func("string");
/**
 * 상단에 있는 func 함수를 사용할경우 추론하는 값은 any 가된다.
 * 이러면 아래 함수들을 실행할때 문제가 발생 (unknown 으로 변경 하면 빨간줄오류)
 *
 * typeof 로 처리해도 되지..만 type 이 늘어날경우
 */
num.toFixed();
num.toLowerCase();
/**
 * 제내릭 타입결과가 제대로 들어감
 */
function func2(value) {
    return value;
}
let num2 = func2(10);
let str2 = func2("hofe");
/**
 * 제네릭 함수 응용하기
 */
function swap(a, b) {
    return [b, a];
}
const [a, b] = swap("1", 2);
console.log(a);
console.log(b);
export {};
