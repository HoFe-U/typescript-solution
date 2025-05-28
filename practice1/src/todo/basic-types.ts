// TODO 2: 다양한 기본 타입을 선언하고 출력해보세요

let age: number; // 숫자 값 할당
let isStudent: boolean; // true 또는 false 값 할당
let userName: string; // 이름을 문자열로 할당
let emptyValue: null = null;
let notDefined: undefined = undefined;

let anyValue: any; // 문자열 → 숫자로 값을 바꿔보세요
anyValue = "hello";
// anyValue에 숫자 값을 다시 넣어보세요. 이후 아래함수를 실행하게 해보세요
// anyValue.toFixed(2);

let unknownValue: unknown;
let unknownValue2 = unknownValue;
// unknownValue2 에 unknownValue 값을 넣어서 아래 함수가 실행되게 해주세요(타입 단언)
// unknownValue2.toUpperCase();

function throwError(): never {
  // 아래 never 가 실행되게 해주세요
}


/**
 * 아래 type 들이 서로소 관계를 가지게 하세여
 */
type User = {

}

type Admin = {

}

type Guest = {

}

type UserInfo = any;

/**
 * 위의 타입들이 있을때 아래 값에 타입들이 제대로 들어가게 해주세요
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