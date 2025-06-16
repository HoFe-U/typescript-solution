/**
 * 아래 User 가 주어져있을때 유틸리티 함수들을 사용해서 문제를 해결하세요
 */

interface User {
  id : number;
  name : string;
  nickName ?: string;
}

class MyUser implements User {
  id: number;
  name: string;
  nickName?: string;

  constructor(id: number, name: string, nickName?: string) {
    this.id = id;
    this.name = name;
    if (nickName) this.nickName = nickName;
  }
}

function getUserInfo() {
  return {
    id : 1,
    name : "유호철",
    nickName : "HofeU",
    token : "abcdefg12345"
  }
}

/**
 * TODO 1. User 객체중에 일부 속성만 update 할수있는 함수를 선언해주세요
 * name 속성만
 * hint : Partial + ?
 */
function updateUser(user: User, updates: /* 여기에 알맞은 타입 작성 */): User {
  return { ...user, ...updates };
}

/**
 * TODO 2 : 모든 프로퍼티가 필수인 user 를 정의 하고 아래를 작성하세요
 * hint : Required
 */
type FullUser = /* 여기에 알맞은 타입 작성 */;

const fullUser: FullUser = {
  id: 1,
  name: "완전한 유저",
  nickName: "완유",
};

/**
 * TODO 3: 읽기 전용 사용자를 정의하고 아래 내용이 수정될수 없는지를 확인햅주세요
 * hint : ReadOnly
 */
type ReadOnlyUser =/* 여기에 알맞은 타입을 작성 */;

const readUser: ReadOnlyUser = {
  id :1,
  name : "읽기전용유저",
}

/**
 * TODO 4 : User 타입을 역할별로 구분되게 만들어주세요 
 * hint : Record
 */
type UserRoles = "admin" | "user" | "guest"

const roleUsers : /* 여기에 알맞은 타입을 작성 */ = {
  admin : new MyUser(1,"관리자"),
  user : new MyUser(2,"일반사용자"),
  guest : new MyUser(3,"게스트")
}

/**
 * TODO 5 : nickName 만 사용하는 타입을 구현하여주세요 (nickName 은 필수로)
 * hint : Pick
 */

type PickUserNickname = /* 여기에 알맞은 타입을 작성 */;

const pickUser : PickUserNickname={
  nickName : "hofeU"
}

/**
 * TODO 6 : UserRoles 에서 admin 권한을 제거한 권한만 보여주려면?
 * hint : Exclude
 */

type ExcludeUserRoles = ;

/**
 * TODO 7 : UserRoles 에서 admin 권한만 추출하려면?
 * hint : Extract
 */

type ExtractUserRole = ;

/**
 * TODO 8 : getUserInfo 에서 token 값을 제외하여 리턴값을 기반으로 타입으로 
 *          활용하세요
 * hint : ReturnType + ?
 */

type UserInfo = /* 여기에 알맞은 타입을 작성 */;

const user : UserInfo = {
  id : 2,
  name : "aa",
  nickName : "AA"
}
