var hero;
// 타입스크립트가 추론한 y의 타입은 { name: string; location: string; } 입니다.
var capt = { name: "Captain", location: "Pangyo" };
hero = capt;
console.log(capt);
