/**
 * 타입스크립트의 기본타입 (추가된 타입만)
 * const, let ,var 변수이름 : 타입 = 값;
 */
let num = 10; // 숫자 타입
let str = "hello"; // 문자열 타입
let bool = true; // 불리언 타입
num = 20;
str = "world";
bool = false;
let arrNumber = [1, 2, 3]; // 숫자 배열
let unionType = 10;
unionType = "hello"; // 유니언 타입은 여러 타입을 가질 수 있습니다.
unionType = 30; // 숫자 타입으로 다시 할당 가능
let tupleType = [10, 1];
tupleType = [20, 3]; // 튜플 타입은 고정된 길이와 타입을 가집니다.
arrNumber = tupleType; // 배열은 튜플로 할당이 가능합니다.
// tupleType = arrNumber; // 튜플은 배열로 할당이 불가능합니다
/**
 * 리터럴 타입
 * "hello" ⊂ string ⊂ unknown // upcasting 만 가능합니다.
 */
let numLiteral = 10;
let strLiteral = "hello";
let boolLiteral = true;
// numLiteral = 20;
// strLiteral = "world";
// boolLiteral = false;
/**
 * 타입스크립트의 특수 타입
 */
// 1. unknown (전체 집합)
let unknownValue;
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
let neverValue;
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
let anyValue;
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
let anyValue2 = "hello";
let downcastedValue = anyValue; // any는 모든 타입으로 다운캐스팅이 가능합니다.
let unknown2 = unknownValue; // unknown은 타입가드(단언)을 사용하여 다운캐스팅이 가능합니다.
const user1 = {
    role: "user",
    userName: "HofeUser",
};
const user2 = {
    role: "admin",
    adminName: "Admin_Hofe",
};
const user3 = {
    role: "guest",
    gusetName: "HoFe"
};
/**
 *  A ∩ B = ∅일 때 서로소 관유니언 관계
 * @param user
 */
function getUserInfo(user) {
    switch (user.role) {
        case 'user': {
            user.userName;
            break;
        }
        case 'admin': {
            user.adminName;
            break;
        }
        case 'guest': {
            user.gusetName;
            break;
        }
    }
}
const dog = {
    name: "Buddy",
    age: 3,
    isBark: true
};
const cat = {
    name: "Whiskers",
    age: 2,
    isScratch: true
};
const catDog = {
    name: "Mittens",
    age: 4,
    isBark: false,
    isScratch: true
};
const a = {
    name: "Hofe",
    a: "A"
};
export {};
