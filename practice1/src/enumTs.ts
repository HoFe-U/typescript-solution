/**
 * Enum 주의사항 => 컴파일된 후의 js 를 보면된다
 */
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name : "hofe",
  role : Role.ADMIN,
}

const user2 = {
  name : "hofe2",
  role : Role.USER,
}
