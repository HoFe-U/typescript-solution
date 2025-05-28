
/**
 * Index Signature 예시
 * 
 * Index Signature는 객체의 키가 동적으로 결정될 때 사용합니다.
 * 예를 들어, 사용자 정보를 저장하는 객체를 만들 때, 각 사용자의 이름과 나이를 동적으로 추가할 수 있습니다.
 * 이렇게 하면 객체의 키가 미리 정의되어 있지 않아도 됩니다.
 * 
 * 주의점 : 
 */
type LegacyValue = {
  name : string;
  age : string;
}

type Value ={
  [key : string] : string
};

type IndexSignature = {
  [key: string]: Value;
};

const indexSignature: IndexSignature = {
  user1: { name: "Hofe", age: "29" },
  user2: { name: "Admin", age: "25" },
  user3: { name: "Guest", age: "20" },
};

const legacyValue : LegacyValue = {
  name: "Hofe",
  age: "29",
}

const legacyValue2 : LegacyValue = {
  name: "Admin",
  age: "25",
}

const legacyValue3 : LegacyValue = {
  name: "Guest",
  age: "20",
}

//...