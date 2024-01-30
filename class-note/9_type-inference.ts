// 타입 추론 기본 1
// 기본적인 선언과 할당에 의해 타입이 추론되는것을 확인할 수 있다.
var a;

function getB(b = 10) {
  return b;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
//
// var shoppingItem: Dropdown<string> = {
//   value: "jean",
//   title: "Levis"
// }

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<T> extends Dropdown<string> {
  description: string;
  tag: T;
}

var detailedItem: DetailedDropdown<number> = {
  description: "hi",
  tag: 1,
  value: "aaa",
  title: "bob",
};

// Best Common Type
// (number | null | string)[]으로 추론된다.
let arr = [0, 1, null, "string"];
