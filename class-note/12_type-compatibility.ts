interface Avengers {
  name: string;
}

let hero: Avengers;
// 타입스크립트가 추론한 y의 타입은 { name: string; location: string; } 입니다.
let capt = { name: "Captain", location: "Pangyo" };
hero = capt;

console.log(capt);

// function
var func1 = function (a: number) {
  // ...
};

var sum = function (a: number, b: number) {
  // ...
};
func1 = sum;
sum = func1;

// Generic
interface Empty<T> {
  //...
}
var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  name: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
