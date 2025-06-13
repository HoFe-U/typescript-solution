/**
 * 유틸리티 타입..
 */
interface User {
  id : number;
  name : string;
  nickName ?: string;
  modifyUser(name :string):void;
}

class MyUser implements User {
  constructor(
    public id : number,
    public name : string,
    public nickName : string
  ){}

  modifyUser(name: string): void {
      this.name = name
  }
};

/**
 * Partial<T>
 * 
 * 모든 타입을 optional 값으로 처리됨
 */
type PartialUser = Partial<User>;

const user1 = {
  id : 1,
  name : "hofe",
  nickName : "Hofe-U"
}

/**
 * 사용되는곳
 * 
 * 수정된 user 정보를 반환할 수 있음
 */
function updateUser(user : User, userFields : PartialUser) {
  return {...user, ...userFields}
}

/**
 * Requried<T>
 * 
 * 모든 타입을 필수 값으로 처리
 */
type RequiredUser = Required<User>

/**
 * ReadOnly<T>
 * 
 * 모든 타입이 readOnly 값으로 처리
 */
type ReadOnlyUser = Readonly<User>

/**
 * Record<K, T> 
 * >= ✅ 실무에서 많이 사용된다고 합니다.
 * 키 K 를 가지고 , 각 값의 타입이 T 인 객체를 생성
 */

/**
 * 사용예시
 */

type UserType = "admin" | "user" | "guest";

const users: Record<UserType, User> = {
  admin: {
    id: 1,
    name: "관리자",
    modifyUser(name) {
      this.name = name;
    },
  },
  user: {
    id: 2,
    name: "일반 사용자",
    modifyUser(name) {
      this.name = name;
    },
  },
  guest: {
    id: 3,
    name: "손님",
    modifyUser(name) {
      this.name = name;
    },
  },
};

/**
 * Pick<T, K>
 * 
 * T 에서 K 만 뽑아서 사용
 */
type PickUserName = Pick<User,'name'>

/**
 * Omit<T, K>
 * >= ✅ 실무에서 많이 사용된다고 합니다.
 * T 에서 K를 제외한 타입을 만듬
 */
type OmitUser = Omit<User,'id'>

/**
 * 사용예시 앞서 partical 이랑 같이 주로 쓰이기도 합니다.
 */
const modifyUser : Partial<OmitUser> = {
  // id 는 바뀌면안되는값이기때문에 해당값만 제외.. 하고 수정값처리
}


/**
 * Exclude<T, U>
 * 
 * T 에서 U 에 해당하는 타입을 제거 (유니언 타입에서)
 */
type ExcludeUser = Exclude<keyof User,'name'>

/**
 * Extract<T, U>
 * 
 * T 에서 U 에 해당하는 값만 추출 (유니언 타입에서)
 */
type ExtractUser = Extract<keyof User,'name'>

/**
 * NonNullable<T>
 * 
 * 타입 T 에서 null, undefined 를 제거
 */

type NonNullUser = NonNullable<keyof User>;

/**
 * ReturnType<T>
 * 
 * T 의 리턴값 추출 (함수타입)
 */

type ReturnTypeUser = ReturnType<() => keyof User>

/**
 * 사용예시 
 */
function fetchUser() : Omit<User,"modifyUser"> {
  return {
  // 특정값이 반환이될때
  id: 1,
  name: "hofe",
}
}

/**
 * 해당 리턴값을 Type으로 바로 재사용이 가능
 */
type UserResponse = ReturnType<typeof fetchUser>;

function displayUser (user : UserResponse) {
  console.log(user);
}

/**
 * Parameters<T>
 * 
 * 함수 타입 T 를 튜플로 추출
 */

type ParametersUser = Parameters<() => keyof User>;

/**
 * ConstrutorParamters<T>
 * 
 * 생성자 타입 함수를 T 타입 튜플로추출
 */

type ConstructorParametersUser = ConstructorParameters<typeof MyUser>

/**
 * InstanceType<T>
 * 생성자 타입 함수를 T 에서 생성된 인스턴스 타입을 추출(new)
 */

type InstanceTypeUser = InstanceType<typeof MyUser>

function createUser(...args: ConstructorParametersUser): InstanceTypeUser {
  return new MyUser(...args);
}