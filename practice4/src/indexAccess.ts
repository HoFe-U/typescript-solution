/**
 * 인덱스드 엑세스 타입
 *
 * 객체 , 배열 ,튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const post: Post = {
  title: "제목",
  content: "내용",
  author: {
    id: 1,
    name: "이름",
    age: 1,
  },
};

// 작성자의 정보를 붙여서 출력하는 함수 하나가 있다면?
function printAuthorInfo(author: { id: number; name: string }) {
  console.log(`${author.id} - ${author.name}`);
}
printAuthorInfo(post.author);

/**
 * Post 에 있는 author... 에 속성이 추가된다면?
 * 아래와같이 Post["여기들어가는"] String literal 타입인 "author" 를 "인덱스" 라고 부르고
 * 해당 인덱스를 통해 타입에 접근한다고하여 "인덱스드 엑세스 타입" 이라고 합니다.
 */
function printAuthorInfo2(author: Post["author"]) {
  console.log(`${author.id} - ${author.name} - ${author?.age}`);
}

/**
 * 그럼 아래같이 string 값을 바로 넣으면 처리가 될까?
 */

const strliterKey = "author";

/**
 * strliterKey 는 인덱스 타입이 아니고 문자열 값이기 때문에 오류가 발생합니다.
 */
function printAuthorInfo3(author: Post[strliterKey]) {
  // ...
}

/**
 * Post 를 담아두는 list type 들
 * 아래와 같은 형식
 * [
 *  { title : ..., ..}
 *  { title : ..., ...}
 * ...
 * ]
 */
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const postList: PostList = [
  {
    title: "제목",
    content: "내용",
    author: {
      id: 1,
      name: "이름",
      age: 1,
    },
  },
];

const postList2: PostList[1] = {
  title: "제목",
  content: "내용",
  author: {
    id: 1,
    name: "이름",
    age: 1,
  },
};

const postList3: PostList[] = [
  [
    {
      title: "제목",
      content: "내용",
      author: {
        id: 1,
        name: "이름",
        age: 1,
      },
    },
  ],
];


/**
 * 튜플 인덱스드 엑세스 타입
 */

type CustomTuple = [number ,string, boolean];

type Tup0 = CustomTuple[0];

type Tup1 = CustomTuple[1];

type Tup2 = CustomTuple[2];

type Tup3 = CustomTuple[number]; // number 를 넣을시에 최적의 공통타입을 불러온다.
