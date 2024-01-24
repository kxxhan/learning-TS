interface User {
  age: number;
  name: string;
}

// 1. 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: "seho",
};

// 2. 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const user1 = {
  age: 3,
  name: "jhin",
};
getUser(user1);

// 3. 함수의 스펙(구조)를 정의하는 인터페이스
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 4. 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ["a", "b", "c"];
// arr[0] = 10 Error Occur!!!

// 5. 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

// 5. 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  lang: string;
}

let captain: Developer = {
  name: "cpt",
  age: 100,
  lang: "ts",
};

export {};
