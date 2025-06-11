import { Expect, Equal } from "../testUtils/utils";
/**
 * TODO 1. 아래 형식이 실행되는 제네릭 함수를 생성
 * => callback 부분에함수가들어갈수있게 
 * => arr 에는 any 말고 특정타입이 들어갈수 있게처리
 */

function map<T,U>(arr : T[], calback : (item :T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(calback(arr[i]));
  }
  return result;
}

const arr = [1,2,3];
const convertArrNum = map(arr , (item) => item * 2);
const convertArrStr = map(arr, (item) => item.toString());

console.log("arrNum : ", convertArrNum);
console.log("arrStr : ", convertArrStr);

/**
 * TODO 2. 제네릭 인터페이스 
 * 인덱스 시그니쳐를 사용해서 아래 값들을 완성하세요 
 */


interface Map<V> {
  [key : string] : V;
}

let stringMap : Map<string> = {
  key : "value"
}

let booleanMap : Map<boolean> = {
  key : true
}

let numberMap : Map<number> = {
  key : 1
}


/**
 * TODO 3. 제네릭 type 만들기
 * 
 * 식료품점, 식료품상품, 샐러드에대해 아래 테스트를 통과할수있게 해주세요
 * 
 */
type GroceryStore<T,V> = {
  name : T;
  city : V;
}

type GroceryItem<T1, T2, T3> = {
  name : T1;
  price : T2;
  inStock : T3;
}

type Salad = GroceryItem<"Caprese Salad", 14.99, true>

type test_SaladName = Expect<Equal<
  Salad['name'],
  'Caprese Salad'
>>;

type test_SaladPrice = Expect<Equal<
  Salad['price'],
  14.99
>>;

type test_SaladInStock = Expect<Equal<
  Salad['inStock'],
  true
>>;

type test_KrogerDetroit = Expect<Equal<
  GroceryStore<'이런저런마트', '부산'>,
  { name: '이런저런마트', city: '부산' }
>>;

type test_StopNShopMassachusetts = Expect<Equal<
  GroceryStore<'E 마트', '마산'>,
  { name: 'E 마트', city: '마산' }
>>;