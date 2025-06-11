/**
 * 제네릭 기본정의
 * 
 * 데이터 형식의 의존하지 않고 다른 데이터 타입을 가질수 있게 하는 기술
 */

function func (value : any) {
  return value;
}

let num = func (10);

let str = func ("string");

/**
 * 상단에 있는 func 함수를 사용할경우 추론하는 값은 any 가된다.
 * 이러면 아래 함수들을 실행할때 문제가 발생 (unknown 으로 변경 하면 빨간줄오류)
 * 
 * typeof 로 처리해도 되지..만 type 이 늘어날경우
 */

// num.toFixed();
// num.toLowerCase(); 

/**
 * 제내릭 타입결과가 제대로 들어감
 */
function func2<T>(value : T) : T {
  return value;
}

let num2 = func2(10);

let str2 = func2("hofe");

/**
 * 제네릭 함수 응용하기
 */

function swap<T,U>(a : T, b : U) {
  return [b,a]; // 유니온타입처럼 보임 (추론하지않았기 때문에)
}

const [a,b] = swap ("1",2);

console.log(a);
console.log(b);

/**
 * 제네릭 함수 응용 + 타입 추론 
 */
function swap2<T,U> (a : T, b : U) : [U,T] {
  return [b,a];
}

const [c,d] = swap2("1",2);

console.log("c : ", c.toFixed(5));
console.log("d : ", d.toUpperCase());

/**
 * 제네릭 인터페이스
 * 
 * 아래 타입을 K , V 에 원하는 타입을 넣게되면 데이터가 들어간다
 * 제네릭 함수와 차이를 보면 swap 을 구현한값들은 <> 꺽쇠안에 타입을 선언
 * 하지않았지만 아래 interface 를 구현한 변수들은 반드시 타입을 명시해야함.
 */

interface KeyPair<K, V> {
  key : K;
  value : V;
}

let keyPair : KeyPair<string ,number> = {
  key : "key",
  value : 0,
}

let keyPair2 : KeyPair<boolean ,number[]> = {
  key : true,
  value : [1]
}

/**
 * 인덱스 시그니쳐 + 제네릭 인터페이스
 * 
 * 아래와 같은형식으로 활용이 가능함
 */
interface Map<V> {
  [key : string] : V;
}

let stringMap : Map<string> = {
  key : "value"
};

let booleanMap : Map<boolean> = {
  key : true
}

/**
 * 인덱스 시그니쳐 + 제네릭 타입
 * 
 * 아래와 같은형식으로 활용이 가능 (타입명시 해야함)
 */

type Map2<V> = {
  [key : string] : V;
}

let stringMap2 : Map2<string> = {
  key : "String"
};

/**
 * 기본 Student / Developer
 */
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "hofe",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "대학교",
  },
};

goToSchool(studentUser); // 함수내부에서 타입을 좁힐 이유가 없음


/**
 * 제네릭 클래스
 */

class List<T> {
  constructor(private list : T[]) {
    // 접근제어자가 private 이면 this.list = list 가 자동
  }

  push (data : T) {
    this.list.push(data)
  }

  pop () {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1,2,3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1","2"]);
stringList.pop();
stringList.push("$");
stringList.print();
