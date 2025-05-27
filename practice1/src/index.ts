/**
 * 타입스크립트의 기본타입 (추가된 타입만)
 * const, let ,var 변수이름 : 타입 = 값;
 */

let num : number = 10;      // 숫자 타입
let str : string = "hello"; // 문자열 타입
let bool : boolean = true;  // 불리언 타입

num = 20;
str = "world";
bool = false;

let arrNumber : number[] = [1,2,3]; // 숫자 배열
let unionType : number | string = 10;
unionType = "hello"; // 유니언 타입은 여러 타입을 가질 수 있습니다.
unionType = 30; // 숫자 타입으로 다시 할당 가능

let tupleType : [number, number] = [10, 1];
tupleType = [20, 3] // 튜플 타입은 고정된 길이와 타입을 가집니다.
arrNumber = tupleType; // 배열은 튜플로 할당이 가능합니다.
// tupleType = arrNumber; // 튜플은 배열로 할당이 불가능합니다

/**
 * 리터럴 타입
 * "hello" ⊂ string ⊂ unknown // upcasting 만 가능합니다.
 */
let numLiteral : 10 = 10;
let strLiteral : "hello" = "hello";
let boolLiteral : true = true;

// numLiteral = 20;
// strLiteral = "world";
// boolLiteral = false;

/**
 * 타입스크립트의 특수 타입
 */
// 1. unknown (전체 집합)
let unknownValue : unknown;
unknownValue = 10;
unknownValue = "hello";
unknownValue = true;
unknownValue = { name: "John" };
unknownValue = [1, 2, 3];

/**
 * 선언된 변수의 할당
 */
unknownValue = str;
unknownValue = bool;
unknownValue = num;

/**
 * unknown 타입의 변수는 다른 타입으로 직접 할당할 수 없습니다.
 * 하지만, 타입 가드를 사용하여 안전하게 사용할 수 있습니다.
 */
if (typeof unknownValue === 'number') {

}

// 2. never
let neverValue: never;
// neverValue = 10; // Error: Type 'number' is not assignable to type 'never'.
// neverValue = "hello"; // Error: Type 'string' is not assignable to type 'never'.
// neverValue = true; // Error: Type 'boolean' is not assignable to type 'never'.
// neverValue = { name: "John" }; // Error: Type '{ name: string; }' is not assignable to type 'never'.
// neverValue = [1, 2, 3]; // Error: Type 'number[]' is not assignable to type 'never'.
// neverValue = any; 
// neverValue = unknown;

/**
 * neverValue는 절대 할당될 수 없는 타입입니다.
 */ 

// neverValue = unknownValue;
// neverValue = num;
// neverValue = str;
// neverValue = bool;
// neverValue = (() => {
//   while(true) {
//   }
// })();


// 3. any
let anyValue: any;
anyValue = 10; // number
anyValue = "hello"; // string
anyValue = true; // boolean
anyValue = { name: "John" }; // object
anyValue = [1, 2, 3]; // array
// anyValue = neverValue; // never
anyValue = unknownValue; // unknown


/**
 * 다운캐스팅이 가능한 타입
 */
let anyValue2 : any ="hello";

let downcastedValue: string = anyValue; // any는 모든 타입으로 다운캐스팅이 가능합니다.

let unknown2 = unknownValue as string; // unknown은 타입가드(단언)을 사용하여 다운캐스팅이 가능합니다.

// let never2 = (() => { throw "err"})();
// let str2: string = never2;
// let any2: any = never2;

/**
 * 결론적으로
 * any는 모든 타입으로 다운캐스팅이 가능하지만,
 * unknown은 타입가드를 사용하여 안전하게 다운캐스팅이 가능합니다.
 * never는 절대 할당될 수 없는 타입입니다.
 * 따라서, 타입스크립트에서는 가능한 한 any를 사용하지 않고,
 * unknown과 never를 사용하여 타입 안전성을 높이는 것이 좋습니다.
 */ 



/**
 * type 과 interface 의 차이점
 * 1. type은 타입 별칭을 만들 때 사용하고, interface는 객체의 구조를 정의할 때 사용합니다.
 * 2. type은 기본 타입, 유니언 타입, 튜플 등 다양한 타입을 정의할 수 있지만,
 * interface는 객체의 구조를 정의하는 데 주로 사용됩니다.
 * 3. interface는 확장(extends)과 구현(implements)이 가능하지만,
 * type은 확장할 수 없습니다.
 * 4. interface는 중복 선언이 가능하지만, type은 중복 선언이 불가능합니다.
 * 5. interface는 클래스와 함께 사용하여 클래스의 구조를 정의할 수 있지만,
 * type은 클래스와 함께 사용하여 구조를 정의할 수 없습니다.
 */


/**
 * type 의 사용 예시
 */
type User = {
  role : "user"
  userName : string;
}

type Admin = {
  role : "admin";
  adminName : string;
}

type Guest = {
  role : "guest";
  gusetName : string;
}

/**
 * & => ((A ∩ B))
 * | => ((A ∪ B))
 */
type UserInfo = User | Admin | Guest; // 유니언 타입

type UserInfo2 = User & Admin & Guest; // 인터섹션 타입

const user1: UserInfo = {
  role: "user",
  userName : "HofeUser",
}

const user2: UserInfo = {
  role: "admin",
  adminName : "Admin_Hofe",
}

const user3: UserInfo = {
  role: "guest",
  gusetName : "HoFe"
}


/**
 *  A ∩ B = ∅일 때 서로소 관유니언 관계
 * @param user 
 */
function getUserInfo(user: UserInfo) {
  switch (user.role) {
    case 'user': {
      user.userName;
      break;
    }
    case 'admin':{
      user.adminName;
      break;
    }
    case 'guest':{
      user.gusetName;
      break;
    }
  }
}

/**
 * interface 의 사용 예시
 */
interface Animal {
  name :string;
  age: number;
}

interface Dog extends Animal {
  isBark : boolean
}

interface Cat extends Animal {
  isScratch : boolean
}

interface CatDog extends Dog, Cat {
  name : string;
}
const dog: Dog = {
  name: "Buddy",
  age: 3,
  isBark: true
}
const cat: Cat = {
  name: "Whiskers",
  age: 2,
  isScratch: true
}

const catDog: CatDog = {
  name: "Mittens",
  age: 4,
  isBark: false,
  isScratch: true
}

/**
 * interface의 중복선언
 */

interface A {
  name: string;
} 

interface A {
  a : string;
}

const a : A = {
  name: "Hofe",
  a: "A"
}
