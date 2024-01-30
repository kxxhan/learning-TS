// 타입 단언(type assertion)
var a;
a = 20;
a = "a";
// TS LSP 보다 개발자가 더 타입을 잘 알고 있을 때.
// DOM API를 조작할 때 유용하게 사용할 수 있음
var b = a as string;

// DOM API manipulation

// var div = document.querySelector('div')
// if (div) {
//   div.innerText;
// }

// div는HTMLDivElement | Null로 추론된다.
// 따라서 위 주석처리된 예처럼 div의 유효성을 검사해야 한다.
// 하지만 개발자가 div가 있다는 것을 확신할 수 있을 때
// 타입을 단언하여 사용할 수 있다.
var div = document.querySelector("div") as HTMLDivElement;
div.innerText = "Type Assertion";
