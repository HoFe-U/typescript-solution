# Practice 1
| 기본적인 환경설정 방법과 변수들을 정리

## 환경설정

+ 커맨드라인에 아래와 같이 입력

```bash

npm init # package.json 생성 (Node.js 프로젝트로 초기화 하겠닫)

npm i @types/typescript # npm install(i는 준말) typescript 타입추가

```
+ tsconfig.json 생성후 compilerCoptions 작성

```json

{
  
  "compilerOptions": {
    "target": "ESNext", // 최신방식(컴파일된 JS)
    "module": "ESNext", // 최신방식
    "outDir": "dist", // JS를 어디에 반환할건지
    "strict": true,
    // "strictNullChecks": false,
    "moduleDetection": "force", // 파일을 무조건 모듈로 처리
    "skipLibCheck": true 
  },
  "include": ["src"] // Typescript 컴파일위치
}
```