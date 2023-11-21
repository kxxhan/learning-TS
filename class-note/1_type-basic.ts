// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heros: Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [3, 4, 5];

// TS 튜플 배열 index에 type이 정의되어 있다.
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100,
// };

// property의 속성 정의 가능
let person: { name: string, age: number} = {
    name: "capt",
    age: 30
}

// TS 진위값
let show: boolean = true;

export {}
