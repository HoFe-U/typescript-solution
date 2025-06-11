/**
 * mappedType
 * 맵드 타입은 기존 객체 타입을 기반으로 새로운 객체 타입을 만드는 기능
 * => 유저 정보를 관리하는 기능을 만든다고 가정
 */

interface User {
  id: number;
  name: string;
  age: number;
}

function fetchUser(): User {
  return {
    id: 1,
    name: "hofe",
    age: 29,
  };
}


function updateUser(user: User) {
  // 로오직~
}

updateUser({
  age : 27 // 나이하나만 수정가능할경우에 ..? 어떻게할까
});


/**
 * 방법 1. 새로운 타입 생성
 * 
 * 사용은 가능하지만 중복된 코드가 생성되어 처리됩니다...
 */

type PartialUser = {
  id?: number;
  name?: string;
  age?: number;
}
function updateUser2(user : PartialUser){
  
}

updateUser2({
  age : 27
})

/**
 * Mapped Type 사용
 */

type PartialUser2 = {
  [key  in "id" | "name" | "age"]?: User[key];
}

type PartialUser3 = {
  [key in keyof User] ?: User[key];
}

/**
 * template literal type (템플릿 리터럴 타입)
 * 
 * String literal + String literal 형식입니다.
 */

type Color = "red" | "blue"

type Animal = "dog" | "cat"

type ColorAnimal = `${Color}-${Animal}`;