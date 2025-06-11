/**
 * keyof 연산자
 * 
 * 객체 타입으로부터 모든 key 를 String literal Union 타입으로 추출하는 연산자
 * 나중에 처리할 유틸리티에서도 많이 사용이됩니다.
 */

interface Person {
  name :string;
  age : number;
}

function getProperty (person : Person, key : keyof Person) {
  return person[key];
}

/**
 * keyof 연산자는 type 에만 지정할수 있기때문에 아래 구문은 에러가 납니다.
 */
// function getProperty2 (person : Person, key : keyof person) { 
//   return person[key];
// }

const person : Person = {
  name : "hofe",
  age : 29
}

const personType = {
  name : "hofe",
  age : 29
}

getProperty(person, "name"); // 이미 입력이 iteral 타입밖에 안된다.

/**
 * typeof 와 같이 사용하기
 * 
 * => typeof 는 특정 값의 타입을 문자열로 치환하는 연산자이지만
 * => 아래와 같이 사용시 타입을 추론할수있습니다.
 */

type PersonType = typeof personType;

function getProperty3(person : Person, key : keyof typeof person) {
  return person[key];
}

console.log(getProperty3(person,"age"));
